import { Link, useLocation } from "react-router-dom";
import "../css/header.min.css";

export default function Header() {
  const pageRoute = useLocation();
  let headerBackground = { backgroundColor: "rgb(0,0,0)" };

  if (pageRoute.pathname === "/") {
    headerBackground = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
  } else if (pageRoute.pathname === "/shop") {
    headerBackground = { backgroundColor: "$shop_background" };
  } else {
    headerBackground = { backgroundColor: "rgb(0,0,0)" };
  }
  return (
    <>
      <div className="header" style={headerBackground}>
        <h1>Kicks</h1>
        <nav className="header__nav">
          <Link to="../">Home</Link>
          <Link to="../shop">Shop</Link>
          <Link to="../contact">Contact</Link>
          <Link to="../cart">Cart</Link>
        </nav>
      </div>
    </>
  );
}
