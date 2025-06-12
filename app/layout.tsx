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
      <body className="font-sans bg-black h-full w-full">
        {/* <main className="relative pt-[150px] pb-[140px] lg:py-[200px] overflow-hidden min-h-full xl:h-screen xl:flex xl:items-center xl:justify-center">
          <Image
            src="/DUST.png"
            alt="DUST"
            width={1000}
            height={1000}
            className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-3 md:w-3/4 xl:w-3/5 opacity-20"
          />
          <Image
            src="/DUST.png"
            alt="DUST"
            width={1000}
            height={1000}
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-3 md:w-3/4 xl:w-3/5 opacity-20"
          /> */}

        <main className="py-[100px] md:py-[115px] h-full w-full lg:flex lg:items-center lg:justify-center">
          {children}
        </main>

        {/* </main> */}
      </body>
    </html>
  );
}
