//Third Party Imports
import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Local Imports
import { CartContext } from "../context/CartContext";
import DesktopNavbar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavBar";
import "../../css/navbar.min.css";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [deviceNavBar, setDeviceNavBar] = useState(<DesktopNavbar />);
  const mobileBreakPoint = 768;
  const location = useLocation();
  let navStyle = "navbar__home";

  //componentDidUpdate cart
  useEffect(() => {
    countCartItems(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (location.pathname === "/shop") {
      navStyle = "navbar__shop";
    }
    console.log(location.pathname, navStyle);
  }, [location.pathname]);

  //componentDidUpdate screenWidth
  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    setScreenWidth(window.innerWidth);
    if (screenWidth < mobileBreakPoint) {
      setDeviceNavBar(<MobileNavbar page={navStyle} />);
    } else if (screenWidth > mobileBreakPoint) {
      setDeviceNavBar(<DesktopNavbar page={navStyle} />);
    }
  }, [screenWidth]);

  //Return component based on screen size
  return deviceNavBar;
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
