import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" className="logo-link">
            DUST
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/premise" className="nav-link">
            Premise
          </Link>
          <Link href="/research" className="nav-link">
            Research
          </Link>
          <Link href="/economics" className="nav-link">
            Economics
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="https://everlon.xyz/" className="nav-link">
            <div className="buttonContainerStyle">
              <div className="buttonInnerStyle">ENTER</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
