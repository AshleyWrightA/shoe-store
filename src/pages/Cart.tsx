import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import "../css/cart.min.css";

export default function Cart() {
  const cartItem = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cart__container">
          <img></img>
          <button className="checkout"></button>
          <h1>You have {cartItem.cartItems} items in your cart</h1>
        </div>
      </div>
    </>
  );
}
