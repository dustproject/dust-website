export function Tweet() {
  return (
    <a
      // TODO: update with deeplink
      href="https://x.com/dust_org"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-2 px-[16px] md:px-[24px] py-[16px] xl:flex-1 custom-dashed-border-dark"
    >
      <div className="text-[16px] opacity-50 leading-none flex-shrink-0">
      JULY 30 2025
      </div>
      <div className="text-[16px] leading-none uppercase">
      CELEBRATE 10 YEARS OF ETHEREUM.
      PARTICIPATE IN SMART CONTRACT DRIVEN CONSTRUCTION.
      BUILD THE FIRST FULLY ONCHAIN MONUMENT.
      </div>
    </a>
  );
}
