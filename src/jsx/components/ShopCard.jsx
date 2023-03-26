import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../../css/card.min.css";

export default function ShopCard(props) {
  const { imgPath, displayName, sysName } = props;
  const { addCartItem } = useContext(CartContext);

  return (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={imgPath} alt=""></img>
        <p className="card__display-name">{displayName}</p>
      </div>
      <div className="card__button-wrapper">
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
