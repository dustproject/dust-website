"use client";

import { useAccount } from "wagmi";
import { useAccountModal } from "@latticexyz/entrykit/internal";
import { Providers } from "../migrate/providers";

function ConnectWallet() {
  const { isConnected } = useAccount();
  const { openAccountModal } = useAccountModal();

  return (
    <button
      onClick={openAccountModal}
      className="custom-dashed-border px-6 py-3 text-[16px] uppercase tracking-wide hover:bg-white/5 transition-colors cursor-pointer"
    >
      {isConnected ? "Manage DUST Chain Wallet" : "Connect DUST Chain Wallet"}
    </button>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <div className="w-[32px] h-[32px] flex items-center justify-center custom-dashed-border text-[14px] flex-shrink-0">
      {n}
    </div>
  );
}

export default function WithdrawPage() {
  return (
    <Providers chain="dust">
      <div className="text-white font-[family-name:var(--font-ibm-plex-sans-condensed)]">
        {/* Header */}
        <a
          href="/"
          className="text-[14px] uppercase opacity-50 hover:opacity-100 transition-opacity"
        >
          &larr; Back to DUST
        </a>

        <h1 className="text-[32px] sm:text-[40px] font-bold tracking-wide mt-8">
          Withdrawal Guide
        </h1>

        <p className="text-[18px] sm:text-[20px] italic font-extralight leading-normal mt-4 opacity-80">
          Follow these steps to withdraw your ETH from{" "}
          <a
            href="/chain"
            className="not-italic font-bold underline hover:opacity-80 transition-opacity"
          >
            DUST Chain
          </a>{" "}
          back to Ethereum.
        </p>

        <p className="text-[16px] font-extralight leading-normal mt-4 opacity-50">
          DUST Chain is shutting down on December 31, 2026. Make sure to
          withdraw your funds before then.
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
              Your DUST session wallet holds ETH on DUST Chain. Connect your
              wallet to check your balance and withdraw any remaining funds back
              to your main wallet.
            </p>

            <div className="ml-[48px]">
              <ConnectWallet />
            </div>

            <p className="text-[14px] font-extralight leading-relaxed opacity-40 ml-[48px]">
              Once connected, click "Manage DUST Chain Wallet" to open the
              account modal. Your gas balance and a{" "}
              <span className="font-bold opacity-70">Withdraw</span> button will
              appear there.
            </p>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-4">
              <StepNumber n={2} />
              <h2 className="text-[22px] sm:text-[24px] font-bold tracking-wide">
                Bridge to Ethereum
              </h2>
            </div>

            <p className="text-[16px] font-extralight leading-relaxed opacity-70 ml-[48px]">
              Bridge your ETH from DUST Chain to Ethereum L1 using the DUST
              Chain Bridge. Start your withdrawal well before December 31, 2026
              so there is time to finalize it.
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
                  Bridge ETH from DUST Chain to Ethereum.
                </div>
              </a>
            </div>

            <p className="text-[14px] font-extralight leading-relaxed opacity-40 ml-[48px]">
              DUST Chain is an OP Stack chain. Withdrawals to Ethereum must be
              proven and then finalized after the challenge period (typically 7
              days), so come back to the bridge to complete each step.
            </p>
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
            <a
              href="/chain"
              className="underline hover:opacity-100 transition-opacity"
            >
              DUST Chain info
            </a>
          </p>
        </div>
      </div>
    </Providers>
  );
}
