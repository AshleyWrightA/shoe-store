import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../../css/shop-card.min.css";

export default function ShopCard(props) {
  const { imgPath, displayName, sysName, price } = props;
  const { addCartItem } = useContext(CartContext);

  return (
    <div className="card__container">
      <div className="card__image-parent">
        <img className="card__image" src={imgPath} alt=""></img>
      </div>
      <div className="card__button-wrapper">
        <div className="card__price-wrapper">
          <p className="card__display-name">{displayName}</p>
          <p className="card__price">{price}</p>
        </div>
        <button
          className="card__button-add"
          onClick={() => {
            addCartItem(sysName);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
