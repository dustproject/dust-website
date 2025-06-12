import { LinkButton2 } from "./LinkButton2";

export function CTA2() {
  return (
    <div className="mt-[60px] flex flex-row justify-end items-end w-full sm:flex-row gap-[40px]">
      <LinkButton2
        href="#"
        title="Get access"
        description="Join Discord for early access to the Dust world."
      />
      <LinkButton2
        href="#"
        title="Learn more"
        description="Learn what Dust enables and why it exists."
      />

      <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200">
        Click me!
      </button>
    </div>
  );
}
