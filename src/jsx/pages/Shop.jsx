//Library Imports
import { useContext } from "react";
import { v4 } from "uuid";

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
        <div className="shop__container">
          {fetchedData.map((e) => (
            <ShopCard
              key={v4()}
              imgPath={`./assets/images/${e.imgPath}`}
              displayName={e.displayName}
              sysName={e.sysName}
              price={e.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
