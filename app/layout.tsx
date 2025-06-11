import { IBM_Plex_Sans_Condensed } from "next/font/google";
import "../styles/globals.css";

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
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
