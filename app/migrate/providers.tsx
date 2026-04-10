"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  EntryKitProvider,
  defineConfig,
  createWagmiConfig,
} from "@latticexyz/entrykit/internal";
import { redstone as redstoneConfig } from "@latticexyz/common/chains";
import { mainnet } from "viem/chains";
import { useState, type ReactNode } from "react";
import { fallback, http, webSocket } from "viem";

const redstone = {
  ...redstoneConfig,
  rpcUrls: {
    default: {
      http: redstoneConfig.rpcUrls.default.http,
      webSocket: redstoneConfig.rpcUrls.default.webSocket,
    },
    bundler: {
      http: redstoneConfig.rpcUrls.default.http,
      webSocket: redstoneConfig.rpcUrls.default.webSocket,
    },
    quarrySponsor: {
      http: ["https://sponsor.mud.redstonechain.com/rpc"],
    },
  },
  contracts: {
    ...redstoneConfig.contracts,
    quarryPaymaster: {
      address: "0x2d70F1eFFbFD865764CAF19BE2A01a72F3CE774f" as const,
    },
  },
  blockExplorers: {
    ...redstoneConfig.blockExplorers,
    worldsExplorer: {
      name: "MUD Worlds Explorer",
      url: "https://explorer.mud.dev/redstone/worlds",
    },
  },
} as const;

const worldAddress = "0x253eb85B3C953bFE3827CC14a151262482E7189C" as const;
const chainId = 690;

const wagmiConfig = createWagmiConfig({
  chainId,
  walletConnectProjectId: "cf7034ca81619d057a3fa9f1b030c850",
  appName: "DUST Migration",
  chains: [redstone, mainnet],
  transports: {
    [redstone.id]: fallback([webSocket(undefined, { retryCount: 3 }), http()]),
    [mainnet.id]: http(),
  },
  pollingInterval: {
    [redstone.id]: 2_000,
    [mainnet.id]: 12_000,
  },
});

const entryKitConfig = defineConfig({
  chainId,
  worldAddress,
  theme: "dark",
});

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <EntryKitProvider config={entryKitConfig}>{children}</EntryKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
