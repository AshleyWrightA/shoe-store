import { useContext } from "react";
import { CartContext } from "../CartContext";
import "../css/card.min.css";

interface cardProps {
  image: string;
  title: string;
  price: string;
}

export default function Card(props: cardProps) {
  const { image, title, price } = props;
  const cartItem = useContext(CartContext);

  return (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={image} alt=""></img>
        <p className="card__title">{title}</p>
        <p className="card__price">{price}</p>
      </div>
      <div className="card__buttonwrapper">
        <button
          onClick={() => {
            cartItem.setCartItems(cartItem.cartItems + 1);
          }}
        >
          Add to Cart
        </button>
      </div>
      <h1>{cartItem.cartItems} in the cart</h1>
    </div>
  );
}
