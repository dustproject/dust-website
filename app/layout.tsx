import { IBM_Plex_Sans_Condensed } from "next/font/google";
import "../styles/globals.css";
import Image from "next/image";

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-condensed",
  display: "swap",
});

export const metadata = {
  title: "DUST",
  description:
    "An autonomous world with fixed physics, scarce resources, and player-programmable civilization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSansCondensed.variable}>
      <body className="font-sans bg-black min-h-full w-full">
        <main className="relative py-[100px] md:py-[115px] min-h-full w-full xl:flex xl:items-center xl:justify-center overflow-hidden">
          <Image
            src="/DUST.png"
            alt="DUST"
            width={1000}
            height={1000}
            className="absolute top-0 -translate-y-3/5 left-1/2 -translate-x-1/2 w-full px-3 md:w-3/4 opacity-20"
          />
          <Image
            src="/DUST.png"
            alt="DUST"
            width={1000}
            height={1000}
            className="absolute bottom-0 translate-y-3/5 left-1/2 -translate-x-1/2 w-full px-3 md:w-3/4 opacity-20"
          />

          {children}
        </main>
      </body>
    </html>
  );
}
