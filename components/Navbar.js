"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = path => {
    return pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" className="logo-link">
            DUST
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/premise" className={`nav-link ${isActive("/premise") ? "active" : ""}`}>
            Premise
          </Link>
          <Link href="/research" className={`nav-link ${isActive("/research") ? "active" : ""}`}>
            Research
          </Link>
          <Link href="/economics" className={`nav-link ${isActive("/economics") ? "active" : ""}`}>
            Economics
          </Link>
          <Link href="/projects" className={`nav-link ${isActive("/products") ? "active" : ""}`}>
            Products
          </Link>
          <Link href="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`}>
            Projects
          </Link>
          <Link href="https://www.alpha.dustproject.org/">
            <div className="buttonContainerStyle">
              <div className="buttonInnerStyle">ENTER</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
