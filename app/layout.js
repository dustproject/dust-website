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
