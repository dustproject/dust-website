"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomepage = pathname === "/" || pathname === "/slayherobrine";

  // Don't render the navbar on homepage
  if (isHomepage) {
    return null;
  }

  const isActive = path => {
    return pathname === path;
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-links">
            <Link href="/learn" className={`nav-link ${isActive("/learn") ? "active" : ""}`}>
              WHAT
            </Link>
            <Link href="/explore" className={`nav-link ${isActive("/explore") ? "active" : ""}`}>
              WHY
            </Link>
            <Link href="/survive" className={`nav-link ${isActive("/survive") ? "active" : ""}`}>
              HOW
            </Link>
            <Link href="https://discord.gg/J75hkmtmM4" className={`nav-link`}>
              ACCESS
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
