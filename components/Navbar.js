"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomepage = pathname === "/" || pathname === "/minecraftendgame";

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
          <div className="navbar-logo">
            <Link href="/" className="logo-link">
              DUST
            </Link>
          </div>
          <div className="nav-links">
            <Link href="/coalition" className={`nav-link ${isActive("/coalition") ? "active" : ""}`}>
              Coalition
            </Link>
            <Link href="/premise" className={`nav-link ${isActive("/premise") ? "active" : ""}`}>
              Premise
            </Link>
            {/* <Link href="/research" className={`nav-link ${isActive("/research") ? "active" : ""}`}>
            Research
          </Link> */}
            {/* <Link href="/economics" className={`nav-link ${isActive("/economics") ? "active" : ""}`}>
            Economics
          </Link> */}
            {/* <Link href="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`}>
            Products
          </Link> */}
            <Link href="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`}>
              Projects
            </Link>
          </div>
        </div>
      </nav>
      <div className="navbar-spacer" />
    </>
  );
}
