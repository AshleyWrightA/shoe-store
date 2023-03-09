import { Link, useLocation } from "react-router-dom";
import "../css/navbar.min.css";

export default function Navbar() {
  const pageRoute = useLocation();
  let navBarBackground = { backgroundColor: "rgb(0,0,0)" };

  if (pageRoute.pathname === "/") {
    navBarBackground = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
  } else if (pageRoute.pathname === "/shop") {
    navBarBackground = { backgroundColor: "$shop_background" };
  } else {
    navBarBackground = { backgroundColor: "rgb(0,0,0)" };
  }
  return (
    <>
      <div className="navbar" style={navBarBackground}>
        <h1>Kicks</h1>
        <nav className="navbar__nav">
          <Link to="../">Home</Link>
          <Link to="../shop">Shop</Link>
          <Link to="../contact">Contact</Link>
          <Link to="../cart">Cart</Link>
        </nav>
      </div>
    </>
  );
}
