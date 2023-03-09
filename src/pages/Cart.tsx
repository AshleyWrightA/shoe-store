import Navbar from "../components/Navbar";
import "../css/cart.min.css";

export default function Cart() {
  return (
    <>
      <Navbar />
      <div className="cart">
        <div className="cart__container">
          <img></img>
          <button className="checkout"></button>
        </div>
      </div>
    </>
  );
}
