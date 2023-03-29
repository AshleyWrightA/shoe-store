import { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CartContext } from "../context/CartContext";
import { FetchedDataContext } from "../context/FetchedDataContext";
import Navbar from "../components/Navbar";
import CartCard from "../components/CartCard";
import "../../css/cart.min.css";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const fetchedData = useContext(FetchedDataContext);
  let mappedData = [];

  const cartData = fetchedData.filter((e) => cartItems[e.sysName] > 0);
  mappedData = cartData.map((e) => (
    <CartCard
      key={e.key}
      name={e.displayName}
      sysName={e.sysName}
      img={`../../../src/assets/images/${e.imgPath}`}
    />
  ));

  if (mappedData.length > 0) {
    return (
      <>
        <Navbar />
        <div className="cart">
          <div className="cart__container">
            <h1 className="cart__header">Your Cart</h1>
            <div className="cart__items">{mappedData}</div>
            <button className="cart__checkout">Checkout</button>
          </div>
        </div>
      </>
    );
  } else if (mappedData.length <= 0) {
    return (
      <>
        <Navbar />
        <div className="cart">
          <div className="cart__container">
            <h1 className="cart__header">Your Cart is empty</h1>
            <Icon className="cart__icon" icon="ic:outline-shopping-cart"></Icon>
            <Link className="cart__back" to="/shop">
              Back to shop
            </Link>
          </div>
        </div>
      </>
    );
  }
}
