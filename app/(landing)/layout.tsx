// import "./styles.css";

// export default function LandingLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="xl:flex xl:items-center xl:justify-center xl:min-h-screen">
//       <div className="relative py-[50px] pb-0 md:py-[115px] min-h-full w-full xl:flex xl:items-center xl:justify-center overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// }

// LandingLayout.tsx
import "./styles.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xl:flex xl:items-center xl:justify-center xl:min-h-screen">
      <div className="relative pt-[50px] md:pb-[50px] xl:py-0 w-full xl:flex xl:items-center xl:justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}
