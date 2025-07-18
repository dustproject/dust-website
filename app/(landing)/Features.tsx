export function Features() {
  return (
    <div className="space-y-[45px] xl:space-y-[55px] w-full xl:w-[440px]">
      <Feature
        description={
          <>
            <span className="font-bold not-italic">DUST</span> is an autonomous world where everyone programs civilization. It runs on fixed rules of physics, scarce matter, and permanent history.
          </>
        }
      />

      <Feature
        title="No admins. Just physics."
        description="Scarce matter drives coordination and conflict. The rules of physics enforce themselves on all."
      />
      <Feature
        title="Code the world."
        description="Program your territory. Add to the world's rules. Your code affects everyone, even if you leave."
      />
      <Feature
        title="Can't be wiped."
        description="Everything runs together on one permanent network. A shared history of our greatest work."
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
