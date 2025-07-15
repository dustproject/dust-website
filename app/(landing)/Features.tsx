export function Features() {
  return (
    <div className="space-y-[45px] xl:space-y-[55px] w-full xl:w-[430px]">
      <Feature
        description={
          <>
            <span className="font-bold not-italic">DUST</span> is an autonomous
            world with fixed rules of physics, scarce resources, permanent history, and
            player-programmable civilization.
          </>
        }
      />

      <Feature
        title="No admins. Just physics."
        description="Resources are scarce. Energy drains. Coordinate or contest."
      />
      <Feature
        title="Code the world."
        description="Your code shapes the world's core mechanics. It affects everyone, even if you leave. Not a mod."
      />
      <Feature
        title="Can't be wiped."
        description="Everything runs together on one permanent network. A shared history for our greatest work."
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
      <h3 className="text-[20px] sm:text-[22px] font-bold tracking-wide">
        {title}
      </h3>
      <p className="text-[20px] sm:text-[22px] italic font-extralight leading-normal">
        {description}
      </p>
    </div>
  );
}
