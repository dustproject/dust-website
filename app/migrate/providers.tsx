"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  EntryKitProvider,
  defineConfig,
  createWagmiConfig,
} from "@latticexyz/entrykit/internal";
import { redstone as redstoneConfig } from "@latticexyz/common/chains";
import { useState, type ReactNode } from "react";
import { defineChain, fallback, http, webSocket } from "viem";

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

const dustMainnet = defineChain({
  id: 55378,
  name: "DUST Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.dustproject.org"],
      webSocket: ["wss://rpc.dustproject.org"],
    },
    bundler: {
      http: ["https://bundler.alpha.dustproject.org"],
    },
  },
  contracts: {
    quarryPaymaster: {
      address: "0x417d7e88123888831feb0FBA08B0Ea5F7E5Be198",
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.dustproject.org",
      apiUrl: "https://explorer.dustproject.org/api",
    },
  },
});

// Same world address on both chains (state was migrated from Redstone)
const worldAddress = "0x253eb85B3C953bFE3827CC14a151262482E7189C" as const;
const walletConnectProjectId = "cf7034ca81619d057a3fa9f1b030c850";
const appName = "DUST Migration";

const configs = {
  redstone: {
    wagmiConfig: createWagmiConfig({
      chainId: redstone.id,
      walletConnectProjectId,
      appName,
      chains: [redstone],
      transports: {
        [redstone.id]: fallback([
          webSocket(undefined, { retryCount: 3 }),
          http(),
        ]),
      },
      pollingInterval: {
        [redstone.id]: 2_000,
      },
    }),
    entryKitConfig: defineConfig({
      chainId: redstone.id,
      worldAddress,
      theme: "dark",
    }),
  },
  dust: {
    wagmiConfig: createWagmiConfig({
      chainId: dustMainnet.id,
      walletConnectProjectId,
      appName,
      chains: [dustMainnet],
      transports: {
        [dustMainnet.id]: http(),
      },
      pollingInterval: {
        [dustMainnet.id]: 2_000,
      },
    }),
    entryKitConfig: defineConfig({
      chainId: dustMainnet.id,
      worldAddress,
      theme: "dark",
    }),
  },
};

export type MigrateChain = keyof typeof configs;

export function Providers({
  chain,
  children,
}: {
  chain: MigrateChain;
  children: ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  const { wagmiConfig, entryKitConfig } = configs[chain];

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <EntryKitProvider config={entryKitConfig}>{children}</EntryKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
