import { Link } from "react-router-dom";
import NavCart from "./Navbar/NavCart";

export default function DesktopNavbar({ page }) {
  return (
    <div className={`navbar ${page}`}>
      <nav className="navbar__nav">
        <Link to="/" className="navbar__logo">
          BRAND
        </Link>
        <Link to="../">Home</Link>
        <Link to="../shop">Shop</Link>
        <NavCart />
      </nav>
    </div>
  );
}
