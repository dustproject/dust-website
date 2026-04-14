import "../(landing)/styles.css";

export const metadata = {
  title: "DUST — Migration Guide",
  description:
    "Migrate your assets from Redstone to DUST Chain. Step-by-step guide for withdrawing from your session wallet, bridging off Redstone, and depositing onto DUST Chain.",
};

export default function MigrateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="relative pt-[50px] md:pt-[80px] pb-[80px] w-full max-w-[800px] px-8 sm:px-12">
        {children}
      </div>
    </div>
  );
}
