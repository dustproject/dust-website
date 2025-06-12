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
    <div className="w-[200px] flex flex-col gap-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-[20px] inline-flex flex-col gap-2 group border border-[#929292] text-black bg-white w-full"
        // style={{
        //   backgroundImage:
        //     "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23929292FF' stroke-width='1' stroke-dasharray='6%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
        // }}
      >
        <span className="text-[20px] uppercase group-hover:underline font-semibold">
          {title}
        </span>
      </a>

      <p>
        <span className="text-[16px] text-white/50 uppercase leading-tight">
          {description}
        </span>
      </p>
    </div>
  );
}
