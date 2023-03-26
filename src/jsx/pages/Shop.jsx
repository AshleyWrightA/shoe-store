//React Imports
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

//Components
import Navbar from "../components/Navbar";
import ShopCard from "../components/ShopCard";

//Context
import { FetchedDataContext } from "../context/FetchedDataContext";

//CSS
import "../../css/shop.min.css";

export default function Shop() {
  //State
  const fetchedData = useContext(FetchedDataContext);

  return (
    <>
      <Navbar />
      <div className="shop">
        <nav className="shop__side-nav">
          <Link to="">All Shoes</Link>
        </nav>
        <div className="shop__container">
          {fetchedData.map((e) => (
            <ShopCard
              key={e.key}
              imgPath={`../src/assets/images/${e.imgPath}`}
              displayName={e.displayName}
              sysName={e.sysName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
