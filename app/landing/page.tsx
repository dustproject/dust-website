import { Timer } from "./Timer";
import { Video } from "./Video";

export function Announcement() {
  return (
    <div className="xl:flex xl:justify-between xl:gap-[35px]">
      <Tweet />
      <Timer />
    </div>
  );
}

function Tweet() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-2 px-[16px] md:px-[24px] py-[16px] xl:flex-1 border border-[#929292] border-dashed"
    >
      <div className="text-[16px] opacity-50 leading-none flex-shrink-0">
        JULY 12 2025
      </div>
      <div className="text-[16px] leading-normal md:leading-none">
        DUST IS LIVE AND DEPLOYED TO THE NETWORK. READ THE ANNOUNCEMENT.
      </div>
    </a>
  );
}

export function Features() {
  return (
    <div className="space-y-[45px] w-full xl:w-[430px]">
      <Feature
        description={
          <>
            <span className="font-bold not-italic">DUST</span> is an autonomous
            world with fixed rules of physics, scarce resources, and
            player-programmable civilization.
          </>
        }
      />

      <Feature
        title="No admins. Just physics."
        description="Resources are scarce. Energy drains. Survival takes effort."
      />
      <Feature
        title="Code civilization."
        description="You code the world itself—not mods. Your mechanics run live, shape everyone's play, and persist without you."
      />
      <Feature
        title="Can't be wiped."
        description="All mechanics run together on one permanent network. One shared world to outlast us all."
      />
    </div>
  );
}

export function Feature({
  title,
  description,
}: {
  title?: string;
  description: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-[22px] sm:text-[26px] font-bold">{title}</h3>
      <p className="text-[22px] sm:text-[26px] italic font-extralight leading-normal">
        {description}
      </p>
    </div>
  );
}

export function LinkButton() {
  return <div className="bg-red-100">LinkButton</div>;
}

export function CTA() {
  return (
    <div className="bg-yellow-100 mt-[60px] space-y-[33px] md:flex md:gap-[40px]">
      <LinkButton />
      <LinkButton />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="w-full md:max-w-[824px] xl:max-w-[1400px] md:px-6 xl:px-6 mx-auto text-white">
      <div className="px-8 sm:px-12 mx-auto md:max-w-none">
        <Announcement />

        <div className="flex xl:gap-[85px] mt-[45px] md:mt-[60px]">
          <Features />

          <div className="flex-1 flex-col justify-between hidden xl:flex">
            <Video />
            <CTA />
          </div>
        </div>

        <div className="xl:hidden">
          <CTA />
        </div>
      </div>

      <div className="mt-[55px] md:mt-[65px] xl:hidden">
        <Video />
      </div>
    </div>
  );
}
