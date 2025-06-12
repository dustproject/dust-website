import { LinkButton } from "./LinkButton";

export function CTA() {
  return (
    <div className="mt-[60px] flex flex-col sm:flex-row gap-[40px]">
      <LinkButton
        href="/access"
        title="Get access"
        description="Join Discord to enter the Dust client."
        external
      />
      <LinkButton
        href="/what"
        title="Learn more"
        description="What Dust enables and why it exists."
      />
    </div>
  );
}
