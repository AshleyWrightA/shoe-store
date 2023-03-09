//React Imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//Components
import Navbar from "../components/Navbar";
import Card from "../components/Card";

//CSS
import "../css/navbar.min.css";
import "../css/shop.min.css";

export default function Shop() {
  let shopItems = ShopData();

  return (
    <>
      <Navbar />
      <div className="shop">
        <nav className="shop__nav">
          <Link to="">All Cards</Link>
        </nav>
        <div className="shop__container">{shopItems}</div>
      </div>
    </>
  );
}

function ShopData() {
  const [cardData, setCardData] = useState(undefined);

  //componentDidMount
  useEffect(() => {
    getStoreData().then((data) => {
      setCardData(data);
    });
  }, []);

  //On Re-Render
  if (typeof cardData != "undefined") {
    const cardMap = cardData.map((cardData: any) => (
      <Card image={`../src/assets/images/${cardData.img}.jpg`} title={cardData.name} price="" />
    ));
    return cardMap;
  }
}

async function getStoreData() {
  const firebaseConfig = {
    apiKey: "AIzaSyDY3hIeUOmFSM6KEXxSTUZH_JvL1xkNJG8",
    authDomain: "shoe-st.firebaseapp.com",
    projectId: "shoe-st",
    storageBucket: "shoe-st.appspot.com",
    messagingSenderId: "246378574141",
    appId: "1:246378574141:web:05dbc43976808fd47ad554",
  };

  //takes in app
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getSnapshot = await getDocs(collection(db, "shoe-store"));
  let shoeArray: object[] = [];
  getSnapshot.docs.forEach((e) => {
    shoeArray.push({ ...e.data() });
    console.log(shoeArray);
  });
  return shoeArray;
}
