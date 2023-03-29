import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../css/home.min.css";

export default function Home() {
  console.log("HOME");
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home__background-parent">
          <div className="home__background-child"></div>
        </div>
        <div className="home__hero">
          <h1 className="home__intro">Boots </h1>
          <h2 className="home__intro-2">Straight to your doorstep.</h2>
          <Link to="/shop" className="home__anchor-shop">
            View Catalog
          </Link>
        </div>
      </div>
    </>
  );
}
