import { cn } from "../../utils/cn";

export function Features() {
  return (
    <div className="space-y-[45px] xl:space-y-[55px] w-full xl:w-[440px]">
      <FeatureSmall
        title="Build Ethereum's 10 Year Monument."
        description="Gather and place blocks to complete the monument's blueprint."
        descriptionTwo="Power the force field that will protect the monument forever."
        descriptionThree="Every contribution is recorded onchain."
      />
      <FeatureSmall
        title="Inside Ethereum Itself."
        description="The monument is built inside DUST, a fully onchain world, using its provably scarce materials."
        descriptionTwo="DUST is programmable, so players deployed the smart contracts that define this monument's blueprint and govern its force field."
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
      <p className="text-[20px] sm:text-[22px] font-extralight leading-normal">
        {description}
      </p>
    </div>
  );
}


export function FeatureSmall({
  title,
  description,
  descriptionTwo,
  descriptionThree
}: {
  title?: string;
  description: React.ReactNode;
  descriptionTwo: React.ReactNode;
  descriptionThree?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-[20px] sm:text-[22px] font-bold tracking-wide">
        {title}
      </h3>
      <p className="text-[20px] sm:text-[22px] font-extralight leading-normal italic">
        {description}
      </p>
      <p className="text-[20px] sm:text-[22px] font-extralight leading-normal italic">
        {descriptionTwo}
      </p>
      <p className="text-[20px] sm:text-[22px] font-extralight leading-normal italic">
        {descriptionThree}
      </p>
    </div>
  );
}
