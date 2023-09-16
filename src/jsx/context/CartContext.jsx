import { createContext, useContext, useEffect, useState } from "react";
import { useShopData } from "./ShopDataContext";

// Creating a Context.
export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

// Provider
export function CartProvider({ children }) {
  const shopData = useShopData();
  const [storedCartItems, setStoredCartItems] = useState([]);

  //Fetch initial cart, each item is placed in an object with a value of 0.
  useEffect(() => {
    let cart = {};
    for (let i = 0; i < shopData.length; i++) {
      cart[shopData[i].sysName] = 0;
    }
    setStoredCartItems(cart);
  }, [shopData]);

  //Add item to the cart
  function addCartItem(itemName) {
    setStoredCartItems((prev) => ({ ...prev, [itemName]: prev[itemName] + 1 }));
  }
  //Remove item from the cart
  function removeCartItem(itemName) {
    setStoredCartItems((prev) => ({ ...prev, [itemName]: prev[itemName] - 1 }));
  }

  //Importables from context provider
  const cartContextValue = {
    storedCartItems,
    addCartItem,
    removeCartItem,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}
