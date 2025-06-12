export function Tweet() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-2 px-[16px] md:px-[24px] py-[16px] xl:flex-1"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23929292FF' stroke-width='1' stroke-dasharray='6%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
      }}
    >
      <div className="text-[16px] opacity-50 leading-none flex-shrink-0">
        JULY 12 2025
      </div>
      <div className="text-[16px] leading-normal md:leading-none">
        DUST IS LIVE AND DEPLOYED TO THE NETWORK. READ THE ANNOUNCEMENT.
      </div>
    </a>
  );
}
