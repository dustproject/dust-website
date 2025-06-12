export function LinkButton({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-[20px] border border-[#929292] border-dashed inline-flex flex-col gap-2 sm:w-[200px]"
    >
      <span className="text-[16px] uppercase">{title}</span>
      <span className="text-[16px] text-white/50 uppercase">{description}</span>
    </a>
  );
}
