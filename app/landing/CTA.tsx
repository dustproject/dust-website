import { LinkButton } from "./LinkButton";

export function CTA() {
  return (
    <div className="mt-[60px] flex flex-row justify-end w-full sm:flex-row gap-[60px]">
      <LinkButton
        href="#"
        title="Get access"
        description="Join Discord for early access to the Dust world."
      />
      <LinkButton
        href="#"
        title="Learn more"
        description="Learn what Dust enables and why it exists."
      />
    </div>
  );
}
