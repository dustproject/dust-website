import { cn } from "../../utils/cn";

export function LinkButton({
  href,
  title,
  description,
  className,
  external,
}: {
  href: string;
  title: string;
  description: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "w-full p-[20px] inline-flex flex-col gap-2 sm:w-[200px]",
        ["custom-dashed-border"],
        className
      )}
    >
      <span className="text-[16px] uppercase">{title}</span>
      <span className="text-[16px] text-white/50 uppercase leading-snug">
        {description}
      </span>
    </a>
  );
}
