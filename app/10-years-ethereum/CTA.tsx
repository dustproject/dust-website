import { cn } from "../../utils/cn";
import { LinkButton } from "./LinkButton";

export function CTA() {
  return (
    <div className="mt-[60px] flex flex-col sm:flex-row gap-[40px]">
      <LinkButton
        href="https://alpha.dustproject.org?open-app=https://ethereum-monument.vercel.app/dust-app.json"
        title="Start building"
        description="Spawn inside DUST's Free Browser Client and join the build."
        external
      />
      <a
        href={"https://ethereum.org/en/10years/"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-full p-[20px] inline-flex flex-col gap-2 justify-center items-center sm:w-[220px]",
          ["custom-dashed-border-dark"]
        )}
      >
        <img src="/images/10-years-ethereum.png" alt="DUST" />
      </a>
    </div>
  );
}
