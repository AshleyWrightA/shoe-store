// DataContext fetches data from the firebase database once and places it in an array, which is export to the rest of the webapp via context.

//Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//React
import { createContext, useContext, useEffect, useState } from "react";

const shopDataContext = createContext();

export function useShopData() {
  return useContext(shopDataContext);
}

// TODO
// FIX SHOPDATA

export function ShopDataProvider({ children }) {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const shopDataArr = [];
    getShopData().then((data) => {
      for (let i = 0; i < data.length; i++) {
        let item = {};
        item["id"] = data[i].id;
        item["sysName"] = data[i].sys_name;
        item["displayName"] = data[i].display_name;
        item["imgPath"] = data[i].img;
        item["price"] = data[i].price;
        shopDataArr.push(item);
      }
      shopDataArr.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      });
      setShopData(shopDataArr);
    });
  }, []);

  return <shopDataContext.Provider value={shopData}>{children}</shopDataContext.Provider>;
}

async function getShopData() {
  const firebaseConfig = {
    apiKey: "AIzaSyDY3hIeUOmFSM6KEXxSTUZH_JvL1xkNJG8",
    authDomain: "shoe-st.firebaseapp.com",
    projectId: "shoe-st",
    storageBucket: "shoe-st.appspot.com",
    messagingSenderId: "246378574141",
    appId: "1:246378574141:web:05dbc43976808fd47ad554",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getSnapshot = await getDocs(collection(db, "shoe-store"));
  let dataArr = [];

  getSnapshot.docs.forEach((e) => {
    dataArr.push({ ...e.data() });
  });
  return dataArr;
}
