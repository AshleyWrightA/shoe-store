import { useContext } from "react";
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

  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cart__container">
          <h1 className="cart__header">Your Cart</h1>
          <div className="cart__items">{mappedData}</div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}
