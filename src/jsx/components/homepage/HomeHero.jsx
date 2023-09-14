import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="home__hero">
      <h1 className="home__intro">BRAND </h1>
      <h2 className="home__intro-2">Straight to your doorstep.</h2>
      <Link to="/shop" className="home__anchor-shop">
        View Catalog
      </Link>
    </div>
  );
}
