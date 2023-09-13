//Third Party Imports
import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

//Local Imports
import { CartContext } from "../../context/CartContext";
import NavContainer from "./NavContainer";
import NavCart from "./NavCart";
import "../../../css/navbar.min.css";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mobileBreakPoint = 768;
  const location = useLocation();
  let navStyle = "navbar__home";

  useEffect(() => {
    countCartItems(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (location.pathname === "/shop") {
      navStyle = "navbar__shop";
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  //Return component based on screen size
  return (
    <NavContainer page={navStyle}>
      <Link to="/" className="navbar__logo">
        BRAND
      </Link>
      {screenWidth > mobileBreakPoint && <Link to="../">Home</Link>}
      {screenWidth > mobileBreakPoint && <Link to="../shop">Shop</Link>}
      {screenWidth < mobileBreakPoint && <Icon className="navbar__bars-icon" icon="uis:bars" />}
      <NavCart />
    </NavContainer>
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
