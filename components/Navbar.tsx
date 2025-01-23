import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link href="/">My Portfolio</Link>
    </div>
    <a href="https://github.com/takeshun256/TIL" className="cta-btn">TIL</a>
  </nav>
);

export default Navbar;

