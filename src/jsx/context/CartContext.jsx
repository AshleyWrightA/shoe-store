import { createContext, useContext, useEffect, useState } from "react";
import { FetchedDataContext } from "./FetchedDataContext";

// Creating a Context.
export const CartContext = createContext();

// Provider
export function CartProvider({ children }) {
  //State
  const fetchedData = useContext(FetchedDataContext);
  const [cartItems, setCartItems] = useState([]);

  //Fetch initial cart, each item is placed in an object with a value of 0.
  useEffect(() => {
    let cart = {};
    for (let i = 0; i < fetchedData.length; i++) {
      cart[fetchedData[i].sysName] = 0;
    }
    setCartItems(cart);
  }, [fetchedData]);

  //Add item to the cart
  function addCartItem(itemName) {
    setCartItems((prev) => ({ ...prev, [itemName]: prev[itemName] + 1 }));
  }
  //Remove item from the cart
  function removeCartItem(itemName) {
    setCartItems((prev) => ({ ...prev, [itemName]: prev[itemName] - 1 }));
  }

  //Importables from context provider
  const cartContextValue = {
    cartItems,
    addCartItem,
    removeCartItem,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
