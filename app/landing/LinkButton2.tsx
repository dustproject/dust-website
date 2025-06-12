export function LinkButton2({
  href,
  title,
  description,
}: {
  href: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-[20px] inline-flex flex-col gap-2 group relative transition-colors"
      style={{
        border: "2px solid #4a4a4a",
        // boxShadow:
        //   "inset -2px -2px 0px 0px #000000, inset 2px 2px 0px 0px #ffffff",
      }}
    >
      <div className="absolute inset-0 bg-[#4a4a4a] opacity-0 group-hover:opacity-10 transition-opacity" />

      <span className="text-[36px] xl:text-[40px] font-bold text-white uppercase">
        {title}
      </span>

      <p className="text-[16px] leading-snug mt-2 xl:mt-2 w-[210px] text-white/80">
        {description}
      </p>
    </a>
  );
}
