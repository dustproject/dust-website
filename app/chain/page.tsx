import "../(landing)/styles.css";

export const metadata = {
  title: "DUST — Chain Info",
  description: "Network information for DUST Chain.",
};

const rows = [
  { label: "Network Name", value: "DUST Mainnet" },
  { label: "Chain ID", value: "55378" },
  { label: "Currency Symbol", value: "ETH" },
  {
    label: "RPC HTTP URL",
    value: "https://rpc.dustproject.org",
    href: "https://rpc.dustproject.org",
  },
  {
    label: "RPC WebSocket URL",
    value: "wss://rpc.dustproject.org",
  },
  {
    label: "Block Explorer",
    value: "explorer.dustproject.org",
    href: "https://explorer.dustproject.org/",
  },
  {
    label: "World Explorer",
    value: "explorer.alpha.dustproject.org",
    href: "https://explorer.alpha.dustproject.org/",
  },
  {
    label: "Bridge",
    value: "bridge.dustproject.org",
    href: "https://bridge.dustproject.org/",
  },
  { label: "Data Availability", value: "EigenDA", href: "https://www.eigenda.xyz/" },
  { label: "Preconfirmation Time", value: "200ms via Flashblocks" },
];

export default function ChainInfoPage() {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="relative pt-[50px] md:pt-[80px] pb-[80px] w-full max-w-[800px] px-8 sm:px-12">
        <div className="text-white font-[family-name:var(--font-ibm-plex-sans-condensed)]">
          <a
            href="/"
            className="text-[14px] uppercase opacity-50 hover:opacity-100 transition-opacity"
          >
            &larr; Back to DUST
          </a>

          <h1 className="text-[32px] sm:text-[40px] font-bold tracking-wide mt-8">
            Chain Info
          </h1>

          <p className="text-[16px] font-extralight leading-normal mt-4 opacity-50">
            The public mainnet for DUST, settling on Ethereum Mainnet.
          </p>

          <div className="mt-10 space-y-0">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:items-baseline border-b border-white/10 py-4 gap-1 sm:gap-8"
              >
                <div className="text-[14px] uppercase opacity-50 sm:w-[200px] flex-shrink-0">
                  {row.label}
                </div>
                <div className="text-[16px] font-mono break-all">
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80 transition-opacity"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
