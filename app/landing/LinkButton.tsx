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
      className="w-full p-[20px] inline-flex flex-col gap-2 sm:w-[200px] group"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23929292FF' stroke-width='1' stroke-dasharray='6%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
      }}
    >
      <span className="text-[16px] uppercase group-hover:underline">
        {title}
      </span>
      <span className="text-[16px] text-white/50 uppercase leading-snug">
        {description}
      </span>
    </a>
  );
}
