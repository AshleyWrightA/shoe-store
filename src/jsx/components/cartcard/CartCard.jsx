import { useCart } from "../../context/CartContext";

export default function CartCard({ name, sysName, img }) {
  const { storedCartItems, addCartItem, removeCartItem } = useCart();

  return (
    <div className="cart__cart-card">
      <img className="cart__cart-card-img" src={img} alt={name}></img>
      <div className="cart__cart-card-wrapper">
        <h1>{name}</h1>
        <div className="cart__cart-card-quantity">
          <button
            className="cart__cart-card-remove cart__add-remove"
            onClick={() => removeCartItem(sysName)}
          >
            -
          </button>
          <p>{storedCartItems[sysName]}</p>
          <button
            className="cart__cart-card-add cart__add-remove"
            onClick={() => addCartItem(sysName)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
