import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function DesktopNavbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar__logo">
          Boots
        </Link>
        <nav className="navbar__nav">
          <Link to="../">Home</Link>
          <Link to="../shop">Shop</Link>
          <Link to="../about">About</Link>
          <Link to="../cart" className="navbar__cart">
            <Icon className="navbar__cart-icon" icon="ic:outline-shopping-cart" />
            <p className="navbar__cart-count"></p>
            <Icon
              className="navbar__cart-count"
              icon="material-symbols:circle"
              style={{ color: "transparent" }}
            />
          </Link>
        </nav>
      </div>
    </>
  );
}
