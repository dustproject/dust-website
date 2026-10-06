import "../(landing)/styles.css";

export const metadata = {
  title: "DUST — Withdrawal Guide",
  description:
    "DUST Chain is shutting down on December 31, 2026. Step-by-step guide for withdrawing from your session wallet and bridging from DUST Chain to Ethereum.",
};

export default function WithdrawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="relative pt-[50px] md:pt-[80px] pb-[80px] w-full max-w-[800px] px-8 sm:px-12">
        {children}
      </div>
    </div>
  );
}
