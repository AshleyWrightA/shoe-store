import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NavCart() {
  return (
    <Link to="../cart" className="navbar__cart">
      <Icon className="navbar__cart-icon" icon="ic:outline-shopping-cart" />
      <p className="navbar__cart-count"></p>
      <Icon
        className="navbar__cart-count"
        icon="material-symbols:circle"
        style={{ color: "transparent" }}
      />
    </Link>
  );
}
