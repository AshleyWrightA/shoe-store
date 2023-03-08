import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../css/header.min.css";
import "../css/home.min.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__background-parent">
          <div className="home__background-child"></div>
        </div>
        <div className="home__hero">
          <h1>Kicks </h1>
          <h2>straight to your doorstep.</h2>
          <Link to="/shop" className="home__shop">
            Shop
          </Link>
        </div>
      </div>
    </>
  );
}
