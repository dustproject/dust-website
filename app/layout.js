import { Inter, EB_Garamond } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  verification: {
    google: "tG3xbPj9WMyQC9rPYo-ZRzOQYEhS0T9hFdIyuKtR1ok"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
