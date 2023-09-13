import { Link } from "react-router-dom";

export default function CartButton({ children, route }) {
  return (
    <Link to={route} className="cart__button">
      {children}
    </Link>
  );
}
