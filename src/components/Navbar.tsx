//Third Party Imports
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
//Local Imports
import { CartContext } from "../CartContext";
import "../css/navbar.min.css";

export default function Navbar() {
  const pageRoute = useLocation();
  const cartContextValue = useContext(CartContext);

  let navBarBackground: string;
  let navBarPosition: string;

  //componentDidUpdate
  useEffect(() => {
    updateCartIcon(cartContextValue.cartItems);
  }, [cartContextValue.cartItems]);

  if (pageRoute.pathname === "/") {
    navBarBackground = "rgba(0,0,0,0.6)";
    navBarPosition = "absolute";
  } else if (pageRoute.pathname === "/shop") {
    navBarBackground = "rgb(37, 37, 37)";
    navBarPosition = "relative";
  } else if (pageRoute.pathname === "/contact") {
    navBarBackground = "rgb(37, 37, 37)";
    navBarPosition = "relative";
  } else if (pageRoute.pathname === "/cart") {
    navBarBackground = "rgb(37, 37, 37)";
    navBarPosition = "relative";
  }

  const navBarStyles = {
    position: navBarPosition,
    backgroundColor: navBarBackground,
  } as React.CSSProperties;

  return (
    <>
      <div className="navbar" style={navBarStyles}>
        <h1>Kicks</h1>
        <nav className="navbar__nav">
          <Link to="../">Home</Link>
          <Link to="../shop">Shop</Link>
          <Link to="../contact">Contact</Link>
          <Link to="../cart" className="navbar__cart">
            <Icon className="navbar__cart-icon" icon="ic:outline-shopping-cart" />
            <p className="navbar__cart-count"></p>
            {/* <Icon
              className="navbar__cart-count"
              icon="material-symbols:circle"
              style={{ color: "transparent" }}
            /> */}
          </Link>
        </nav>
      </div>
    </>
  );
}

function updateCartIcon(cartItems: number) {
  const cartCount = document.querySelector<HTMLElement>(".navbar__cart-count");
  cartCount.textContent = cartItems.toString();
}
