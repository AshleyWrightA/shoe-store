import { useEffect, useRef } from "react";
import "../css/card.min.css";

interface cardProps {
  image: string;
  title: string;
  price: string;
}

export default function Card(props: cardProps) {
  const { image, title, price } = props;
  const addItemButtonRef = useRef(null);

  useEffect(() => {
    const addItemButton = addItemButtonRef.current;
    addItemButton.addEventListener("click", addItem);
  }, []);

  return (
    <div className="card__container">
      <div className="card">
        <img className="card__image" src={image} alt=""></img>
        <p className="card__title">{title}</p>
        <p className="card__price">{price}</p>
      </div>
      <div className="card__buttonwrapper">
        <button ref={addItemButtonRef}>Add to Cart</button>
      </div>
    </div>
  );
}

function addItem() {
  console.log("Added to cart!");
}
