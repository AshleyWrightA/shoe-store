//Third Party Imports
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
//Local Imports
import { CartContext } from "../context/CartContext";
import "../../css/navbar.min.css";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [deviceNavBar, setDeviceNavBar] = useState(<DesktopNavbar />);
  const mobileBreakPoint = 600;

  //componentDidUpdate cart
  useEffect(() => {
    countCartItems(cartItems);
  }, [cartItems]);

  //componentDidUpdate screenWidth
  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    setScreenWidth(window.innerWidth);
    if (screenWidth < mobileBreakPoint) {
      setDeviceNavBar(<MobileNavbar />);
    } else if (screenWidth > mobileBreakPoint) {
      setDeviceNavBar(<DesktopNavbar />);
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

function MobileNavbar() {
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

function DesktopNavbar() {
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
