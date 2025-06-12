import "./styles.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative py-[50px] pb-0 md:py-[115px] min-h-full w-full xl:flex xl:items-center xl:justify-center overflow-hidden">
      {children}
    </div>
  );
}
