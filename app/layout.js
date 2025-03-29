import { Inter, EB_Garamond } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
const garamond = EB_Garamond({ subsets: ["latin"] });

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
