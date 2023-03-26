import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartCard(props) {
  const { name, sysName, img } = props;
  const { cartItems, addCartItem, removeCartItem } = useContext(CartContext);

  return (
    <div className="cart__cart-card">
      <img className="cart__cart-card-img" src={img} alt={name}></img>
      <div className="cart__cart-card-wrapper">
        <h1>{name}</h1>
        <div className="cart__cart-card-quantity">
          <button className="cart__cart-card-remove" onClick={() => removeCartItem(sysName)}>
            -
          </button>
          <p>{cartItems[sysName]}</p>
          <button className="cart__cart-card-add" onClick={() => addCartItem(sysName)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
