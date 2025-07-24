export function Tweet() {
  return (
    <a
      // TODO: update with deeplink
      href="https://ethereum.org/en/10years/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-2 px-[16px] md:px-[24px] py-[16px] xl:flex-1 custom-dashed-border"
    >
      <div className="text-[16px] opacity-50 leading-none flex-shrink-0">
        JULY 30 2025
      </div>
      <div className="text-[16px] leading-normal md:leading-none">
        BUILD THE FIRST DIGITAL MONUMENT TO CELEBRATE ETHEREUM'S 10 YEAR
        ANNIVERSARY.
      </div>
    </a>
  );
}
