import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import NavCart from "./Navbar/NavCart";

export default function MobileNavbar({ page }) {
  return (
    <div className={`navbar ${page}`}>
      <nav className="navbar__nav">
        <Link to="/" className="navbar__logo">
          BRAND
        </Link>
        <Icon className="navbar__bars-icon" icon="uis:bars" />
        <NavCart />
      </nav>
    </div>
  );
}
