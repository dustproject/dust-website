export function Features() {
  return (
    <div className="space-y-[25px] xl:space-y-[35px] w-full xl:w-[430px]">
      <Feature
        description="In honor of Ethereum's 10 year anniversary..."
      />
      <Feature
        description="We are building the first fully onchain monument together."
      />
      <Feature
        description="Gather and place blocks to complete the monument's blueprint."
      />
      <Feature
        description="Supply energy to the protective force field that will preserve the monument."
      />
      <Feature
        description="Every contribution is recorded onchain forever."
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
