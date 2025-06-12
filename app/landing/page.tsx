export function Announcement() {
  return (
    <div className="bg-green-100 xl:flex xl:justify-between xl:gap-[35px]">
      <Tweet />
      <Timer />
    </div>
  );
}

function Tweet() {
  return <div className="bg-purple-100 xl:flex-1">Tweet</div>;
}

function Timer() {
  return (
    <div className="bg-yellow-100 w-[168px] flex-shrink-0 hidden xl:block">
      Timer
    </div>
  );
}

export function Features() {
  return (
    <div className="space-y-[45px] w-full xl:w-[400px]">
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
        title="Can’t be wiped."
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
    <div className="space-y-[10px]">
      <h3 className="text-[26px] font-bold">{title}</h3>
      <p className="text-[26px] italic font-extralight leading-normal">
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

export function Video() {
  return <div className="bg-purple-100">Video</div>;
}

export default function LandingPage() {
  return (
    <div className="w-full md:max-w-[824px] md:px-6 mx-auto text-white">
      <div className="max-w-[322px] mx-auto md:max-w-none">
        <Announcement />

        <div className="flex xl:gap-[70px] mt-[45px] md:mt-[60px]">
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
