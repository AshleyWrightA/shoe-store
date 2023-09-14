import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Navbar from "../components/navbar/Navbar";
import ShopContainer from "../components/shoppage/ShopContainer";
import ShopSearch from "../components/shoppage/ShopSearch";
import ShopCard from "../components/shopcard/ShopCard";
import { useShopData } from "../context/ShopDataContext";
import "../../css/shop.min.css";

export default function Shop() {
  //State
  const shopData = useShopData();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult(shopData);
  }, [shopData]);

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query === "") {
      setSearchResult(shopData);
      return;
    }

    const searchData = shopData.filter((item) => {
      if (item.displayName.toLowerCase().includes(query)) {
        return item;
      }
    });
    setSearchResult(searchData);
  }

  const shopItems = searchResult.map((e) => (
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
      <ShopSearch handleSearch={handleSearch} />
      <ShopContainer>{shopItems}</ShopContainer>
    </>
  );
}
