import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getDatabase, ref, onValue } from "@firebase/database";
import Header from "../components/Header";
// import Card from "../componenets/Card";
import "../css/header.min.css";
import "../css/shop.min.css";
// import "../css/card.min.css";

export default function Shop() {
  return (
    <>
      <Header />
      <div className="shop">
        <nav className="shop__nav">
          <Link to="">All Cards</Link>
        </nav>
        <div className="shop__container"></div>
      </div>
    </>
  );
}

// interface cardData {
//   name: string;
//   img: string;
//   number: number;
// }

// function ShopData() {
//   const [cardsData, setCardsData] = useState(undefined);

//   //componentDidMount
//   useEffect(() => {
//     const db = getDatabase();
//     const dataRef = ref(db, "/cards/");

//     onValue(dataRef, (snapshot) => {
//       setCardsData(snapshot.val());
//     });
//   }, []);

//   if (typeof cardsData != "undefined") {
//     const cardMap = cardsData.map((card: cardData, index: number) => (
//       <Card
//         key={index}
//         image={require(`../assets/images/${card.img}`)}
//         title={card.name}
//         price=""
//       />
//     ));
//     return cardMap;
//   }
// }
