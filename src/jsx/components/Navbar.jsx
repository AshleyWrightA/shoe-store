//Third Party Imports
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
//Local Imports
import { CartContext } from "../context/CartContext";
import "../../css/navbar.min.css";

export default function Navbar() {
  const pageRoute = useLocation();
  const { cartItems } = useContext(CartContext);

  let navBarBackground;
  let navBarPosition;

  //componentDidUpdate
  useEffect(() => {
    countCartItems(cartItems);
  }, [cartItems]);

  if (pageRoute.pathname === "/") {
    navBarBackground = "rgba(230,230,230,0.6)";
  } else if (pageRoute.pathname === "/shop") {
    navBarBackground = "rgb(230, 230, 230)";
  } else if (pageRoute.pathname === "/about") {
    navBarBackground = "rgb(230, 230, 230)";
  } else if (pageRoute.pathname === "/cart") {
    navBarBackground = "rgb(230, 230, 230)";
  }

  const navBarStyles = {
    position: navBarPosition,
    backgroundColor: navBarBackground,
  };

  return (
    <>
      <div className="navbar" style={navBarStyles}>
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

function countCartItems(e) {
  let cartCount = 0;
  for (let item in e) {
    if (e[item] > 0) {
      cartCount += e[item];
    }
  }
  updateCartIcon(cartCount);
}

function updateCartIcon(cartItemCount) {
  const cartCount = document.querySelector(".navbar__cart-count");
  cartCount.textContent = cartItemCount.toString();
}
