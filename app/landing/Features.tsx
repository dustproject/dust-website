import Image from "next/image";

export function Features() {
  return (
    <div className="space-y-[45px] w-full xl:w-[430px]">
      <Feature
        description={
          <>
            <span className="font-bold not-italic text-white">
              <Image
                src="/dust-white.png"
                alt="DUST"
                width={100}
                height={48}
                className="inline-block -mt-2 mr-2"
              />
            </span>{" "}
            <span className="text-white">
              is an autonomous world with fixed rules of physics, scarce
              resources, and player-programmable civilization.
            </span>
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
    <div className="space-y-4">
      <h3 className="text-[22px] sm:text-[32px] font-bold tracking-wide">
        {title}
      </h3>
      <p className="text-[22px] sm:text-[22px] font-extralight leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}
