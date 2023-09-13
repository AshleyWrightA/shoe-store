//Library Imports
import { useContext } from "react";
import { v4 } from "uuid";

//Components
import Navbar from "../components/Navbar";
import ShopContainer from "../components/ShopPage/ShopContainer";
import ShopSearch from "../components/ShopPage/ShopSearch";
import ShopCard from "../components/ShopCard/ShopCard";

//Context
import { FetchedDataContext } from "../context/FetchedDataContext";

//CSS
import "../../css/shop.min.css";

export default function Shop() {
  //State
  const fetchedData = useContext(FetchedDataContext);

  const shopItems = fetchedData.map((e) => (
    <ShopCard
      key={v4()}
      imgPath={`./src/assets/images/${e.imgPath}`}
      displayName={e.displayName}
      sysName={e.sysName}
      price={e.price}
    />
  ));

  return (
    <>
      <Navbar />
      <ShopSearch />
      <ShopContainer>{shopItems}</ShopContainer>
    </>
  );
}
