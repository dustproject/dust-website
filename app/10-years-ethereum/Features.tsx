export function Features() {
  return (
    <div className="space-y-[45px] xl:space-y-[55px] w-full xl:w-[430px]">
      <Feature
        description={
          <>
            <span className="font-bold not-italic">DUST</span> is an autonomous
            world with fixed rules of physics. Program civilization, contest for
            scarce matter, and grow permanent history.
          </>
        }
      />

      <Feature
        title="Smart contract driven construction"
        description="A player-deployed smart contract coordinates monument construction, by defining blueprints and tracking contributions.."
      />
      <Feature
        title="Built with scarcity for immortality"
        description="The monument will be built inside a secure force field using scarce matter, like Gold and Glass... to last as long as Ethereum itself."
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
