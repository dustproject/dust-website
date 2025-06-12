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
      className="w-full p-[20px] inline-flex flex-col gap-2 sm:w-[200px] link-button-border"
    >
      <span className="text-[16px] uppercase">{title}</span>
      <span className="text-[16px] text-white/50 uppercase leading-snug">
        {description}
      </span>
    </a>
  );
}
