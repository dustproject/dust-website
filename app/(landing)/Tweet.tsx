export function Tweet() {
  return (
    <a
      href="/migrate"
      className="flex flex-col md:flex-row gap-2 px-[16px] md:px-[24px] py-[16px] xl:flex-1 custom-dashed-border"
    >
      <div className="text-[16px] opacity-50 leading-none flex-shrink-0">
        APRIL 2026
      </div>
      <div className="text-[16px] leading-normal md:leading-none">
        DUST HAS MIGRATED TO DUST CHAIN. FOLLOW THESE STEPS TO CONTINUE PLAYING.
      </div>
    </a>
  );
}
