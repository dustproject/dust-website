export function Tweet() {
  return (
    <a
      // TODO: update with deeplink
      href="https://dustproject.org"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-8 px-[16px] md:px-[24px] py-[16px] xl:flex-1 custom-dashed-border-dark"
    >
      <div className="text-[16px] opacity-50 leading-normal flex-shrink-0">
        HAPPENING IN DUST
      </div>
      <div className="text-[16px] leading-normal">
      The monument is being built inside DUST, a fully onchain world, using <strong>provably scarce materials</strong> like Gold and Glass.
      DUST is deeply programmable—<strong>players deployed custom smart contracts</strong> to define the monument's blueprints and record contributions.
      </div>
    </a>
  );
}
