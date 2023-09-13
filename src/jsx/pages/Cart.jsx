import { useContext } from "react";
import { Icon } from "@iconify/react";
import { v4 } from "uuid";

import { CartContext } from "../context/CartContext";
import { FetchedDataContext } from "../context/FetchedDataContext";
import Navbar from "../components/navbar/Navbar";
import CartContainer from "../components/cartpage/CartContainer";
import CartHeader from "../components/cartpage/CartHeader";
import CartButton from "../components/cartpage/CartButton";
import CartItems from "../components/cartpage/CartItems";
import CartCard from "../components/cartcard/CartCard";
import "../../css/cart.min.css";

export default function Cart() {
  let emptyCart;
  const { cartItems } = useContext(CartContext);
  const fetchedData = useContext(FetchedDataContext);
  const cartData = fetchedData.filter((e) => cartItems[e.sysName] > 0);
  const cartItemCards = cartData.map((e) => (
    <CartCard
      key={v4()}
      name={e.displayName}
      sysName={e.sysName}
      img={`/src/assets/images/${e.imgPath}`}
    />
  ));

  if (!cartItemCards.length <= 0) {
    emptyCart = false;
  } else {
    emptyCart = true;
  }

  if (!emptyCart) {
    return (
      <>
        <Navbar />
        <CartContainer>
          <CartHeader>Your Cart</CartHeader>
          <CartItems>{cartItemCards}</CartItems>
          <CartButton>Checkout</CartButton>
        </CartContainer>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <CartContainer>
          <CartHeader>Your Cart is empty</CartHeader>
          <Icon className="cart__icon" icon="ic:outline-shopping-cart" />
          <CartItems>{cartItemCards}</CartItems>
          <CartButton route={"/shop"}>Back to Shop</CartButton>
        </CartContainer>
      </>
    );
  }
}
