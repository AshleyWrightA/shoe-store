//Third Party Imports
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { useCart } from "../../context/CartContext";
import NavContainer from "./NavContainer";
import NavLinkContainer from "./NavLinkContainer";
import NavCart from "./NavCart";
import "../../../css/navbar.min.css";

export default function Navbar() {
  const { storedCartItems } = useCart();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navStyle, setNavStyle] = useState("navbar__home");
  const mobileBreakPoint = 768;
  const location = useLocation();

  useEffect(() => {
    countCartItems(storedCartItems);
  }, [storedCartItems]);

  useEffect(() => {
    if (location.pathname === "/shop") {
      setNavStyle("navbar__shop");
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
      <NavLinkContainer>
        {screenWidth > mobileBreakPoint && <Link to="../">Home</Link>}
        {screenWidth > mobileBreakPoint && <Link to="../shop">Shop</Link>}
        {screenWidth < mobileBreakPoint && <Icon className="navbar__bars-icon" icon="uis:bars" />}
        <NavCart />
      </NavLinkContainer>
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
