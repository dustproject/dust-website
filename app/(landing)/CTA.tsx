import { LinkButton } from "./LinkButton";

export function CTA() {
  return (
    <div className="mt-[60px] flex flex-col sm:flex-row gap-[40px]">
      <LinkButton
        href="https://alpha.dustproject.org"
        title="Enter"
        description="Enter the world of DUST."
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
