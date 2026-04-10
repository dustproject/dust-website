"use client";

import { useAccount, useSwitchChain } from "wagmi";
import { useAccountModal } from "@latticexyz/entrykit/internal";
import { Providers } from "./providers";

const REDSTONE_CHAIN_ID = 690;

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function ConnectWallet() {
  const { address, isConnected, chainId } = useAccount();
  const { openAccountModal } = useAccountModal();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const isWrongChain = isConnected && chainId !== REDSTONE_CHAIN_ID;

  if (!isConnected) {
    return (
      <button
        onClick={openAccountModal}
        className="custom-dashed-border px-6 py-3 text-[16px] uppercase tracking-wide hover:bg-white/5 transition-colors cursor-pointer"
      >
        Connect Wallet
      </button>
    );
  }

  if (isWrongChain) {
    return (
      <div className="space-y-3">
        <div className="custom-dashed-border px-5 py-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[14px] uppercase opacity-50">Connected</span>
            <span className="text-[18px] font-mono">
              {shortenAddress(address!)}
            </span>
          </div>
          <div className="text-[14px] opacity-50">
            Wrong network — switch to Redstone to continue.
          </div>
        </div>

        <button
          onClick={() => switchChain({ chainId: REDSTONE_CHAIN_ID })}
          disabled={isSwitching}
          className="custom-dashed-border px-6 py-3 text-[16px] uppercase tracking-wide hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-30"
        >
          {isSwitching ? "Switching..." : "Switch to Redstone"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="custom-dashed-border px-5 py-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[14px] uppercase opacity-50">
            Connected to Redstone
          </span>
          <span className="text-[18px] font-mono">
            {shortenAddress(address!)}
          </span>
        </div>
      </div>

      <button
        onClick={openAccountModal}
        className="custom-dashed-border px-6 py-3 text-[16px] uppercase tracking-wide hover:bg-white/5 transition-colors cursor-pointer"
      >
        Manage Wallet &mdash; Withdraw
      </button>
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <div className="w-[32px] h-[32px] flex items-center justify-center custom-dashed-border text-[14px] flex-shrink-0">
      {n}
    </div>
  );
}

function BridgeLink({
  href,
  name,
  description,
}: {
  href: string;
  name: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="custom-dashed-border px-5 py-4 block hover:bg-white/5 transition-colors"
    >
      <div className="text-[16px] uppercase">{name}</div>
      <div className="text-[14px] opacity-50 mt-1">{description}</div>
    </a>
  );
}

export default function MigratePage() {
  return (
    <Providers>
    <div className="text-white font-[family-name:var(--font-ibm-plex-sans-condensed)]">
      {/* Header */}
      <a
        href="/"
        className="text-[14px] uppercase opacity-50 hover:opacity-100 transition-opacity"
      >
        &larr; Back to DUST
      </a>

      <h1 className="text-[32px] sm:text-[40px] font-bold tracking-wide mt-8">
        Migration Guide
      </h1>

      <p className="text-[18px] sm:text-[20px] italic font-extralight leading-normal mt-4 opacity-80">
        DUST has migrated from Redstone to the{" "}
        <span className="not-italic font-bold">DUST Chain</span>, hosted by{" "}
        <span className="not-italic font-bold">Conduit</span> with support from
        the <span className="not-italic font-bold">Optimism Foundation</span>.
        The entire world state from Redstone was migrated — everything that was
        built in the world is preserved on DUST Chain.
      </p>

      <p className="text-[16px] font-extralight leading-normal mt-4 opacity-50">
        Follow these steps to start playing in the new, migrated world.
        Redstone is shutting down on May 15, 2026 (23:59 UTC).
      </p>

      {/* Steps */}
      <div className="mt-12 space-y-10">
        {/* Step 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <StepNumber n={1} />
            <h2 className="text-[22px] sm:text-[24px] font-bold tracking-wide">
              Withdraw from Session Wallet
            </h2>
          </div>

          <p className="text-[16px] font-extralight leading-relaxed opacity-70 ml-[48px]">
            Your DUST session wallet holds ETH on Redstone. Connect your wallet
            to check your balance and withdraw any remaining funds back to your
            main wallet.
          </p>

          <div className="ml-[48px]">
            <ConnectWallet />
          </div>
        </section>

        {/* Step 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <StepNumber n={2} />
            <h2 className="text-[22px] sm:text-[24px] font-bold tracking-wide">
              Withdraw from Redstone
            </h2>
          </div>

          <p className="text-[16px] font-extralight leading-relaxed opacity-70 ml-[48px]">
            Bridge your ETH from Redstone to Ethereum L1 using any of the
            following bridges. Make sure to withdraw before May 15, 2026 —
            especially if you have funds in smart contracts like Uniswap pools.
          </p>

          <div className="ml-[48px] space-y-2">
            <BridgeLink
              href="https://relay.link/bridge/ethereum?fromChainId=690"
              name="Relay"
              description="Fast bridge from Redstone to Ethereum."
            />
            <BridgeLink
              href="https://superbridge.app/?fromChainId=690&toChainId=1"
              name="Superbridge"
              description="OP Stack native bridge for Redstone."
            />
            <BridgeLink
              href="https://www.brid.gg/ethereum?amount=&originChainId=690&token=ETH"
              name="Brid.gg"
              description="Alternative bridge for Redstone withdrawals."
            />
          </div>

          <p className="text-[14px] font-extralight leading-relaxed opacity-40 ml-[48px]">
            After May 15, 2026, a withdrawal contract will be deployed on
            Ethereum L1 for recovering balances held in externally-owned accounts
            (EOAs). Funds locked in contracts on Redstone cannot be recovered
            through this method.
          </p>
        </section>

        {/* Step 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <StepNumber n={3} />
            <h2 className="text-[22px] sm:text-[24px] font-bold tracking-wide">
              Deposit onto DUST Chain
            </h2>
          </div>

          <p className="text-[16px] font-extralight leading-relaxed opacity-70 ml-[48px]">
            Bridge your ETH from Ethereum L1 to DUST Chain to continue playing
            in the new world.
          </p>

          <div className="ml-[48px]">
            <a
              href="https://bridge.dustproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-dashed-border px-5 py-4 block hover:bg-white/5 transition-colors"
            >
              <div className="text-[16px] uppercase">DUST Chain Bridge</div>
              <div className="text-[14px] opacity-50 mt-1">
                Bridge ETH from Ethereum to DUST Chain.
              </div>
            </a>
          </div>
        </section>

        {/* Step 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <StepNumber n={4} />
            <h2 className="text-[22px] sm:text-[24px] font-bold tracking-wide">
              Join the World
            </h2>
          </div>

          <p className="text-[16px] font-extralight leading-relaxed opacity-70 ml-[48px]">
            alpha.dustproject.org now points to DUST Chain. Spawn in and start
            playing — everything that was built on Redstone is already here.
          </p>

          <div className="ml-[48px]">
            <a
              href="https://alpha.dustproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-dashed-border px-5 py-4 block hover:bg-white/5 transition-colors"
            >
              <div className="text-[16px] uppercase">Enter Dust</div>
              <div className="text-[14px] opacity-50 mt-1">
                Spawn in a free browser client on DUST Chain.
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/10 space-y-3">
        <p className="text-[14px] font-extralight opacity-40 leading-relaxed">
          Need help? Join the{" "}
          <a
            href="https://discord.gg/4GZDgpWQ2F"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-100 transition-opacity"
          >
            DUST Discord
          </a>
          .
        </p>
        <p className="text-[14px] font-extralight opacity-40 leading-relaxed">
          Read the{" "}
          <a
            href="https://landing-kbowtmbqw-latticexyz.vercel.app/winding-down"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-100 transition-opacity"
          >
            original Lattice announcement
          </a>
          .
        </p>
      </div>
    </div>
    </Providers>
  );
}
