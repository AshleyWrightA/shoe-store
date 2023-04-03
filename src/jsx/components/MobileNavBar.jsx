import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function MobileNavbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar__logo">
          Boots
        </Link>
        <nav className="navbar__nav">
          <Icon className="navbar__bars-icon" icon="uis:bars" />
          <Link to="../cart" className="navbar__cart">
            <Icon className="navbar__cart-icon" icon="ic:outline-shopping-cart" />
            <p className="navbar__cart-count"></p>
          </Link>
        </nav>
      </div>
    </>
  );
}
