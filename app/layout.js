import { IBM_Plex_Sans_Condensed, EB_Garamond } from "next/font/google";
import "../styles/globals.css";

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-condensed",
  display: "swap",
});

export const metadata = {
  verification: {
    google: "tG3xbPj9WMyQC9rPYo-ZRzOQYEhS0T9hFdIyuKtR1ok",
  },
  openGraph: {
    description:
      "Dust is an autonomous world with fixed rules of physics, scarce resources, and player-programmable civilization.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "DUST",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSansCondensed.variable}`}>
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
