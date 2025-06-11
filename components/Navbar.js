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
    <nav className="navbar">
      <div className="navbar-grid">
        <div /> {/* Left empty column */}
        <div className="navbar-inner">
          <div className="nav-left">
            <Link href="/learn" className={`nav-link ${isActive("/learn") ? "active" : ""}`}>
              [ WHAT ]
            </Link>
            <Link href="/explore" className={`nav-link ${isActive("/explore") ? "active" : ""}`}>
              [ WHY ]
            </Link>
          </div>
          <div className="nav-right">
            <Link href="https://discord.gg/J75hkmtmM4" className="nav-link">
              [ ACCESS ]
            </Link>
          </div>
        </div>
        <div /> {/* Right empty column */}
      </div>
    </nav>
  );
}
