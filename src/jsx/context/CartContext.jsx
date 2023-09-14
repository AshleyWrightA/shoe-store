import { createContext, useEffect, useState } from "react";
import { useShopData } from "./ShopDataContext";

// Creating a Context.
export const CartContext = createContext();

// Provider
export function CartProvider({ children }) {
  //State
  const shopData = useShopData();
  const [cartItems, setCartItems] = useState([]);

  //Fetch initial cart, each item is placed in an object with a value of 0.
  useEffect(() => {
    let cart = {};
    for (let i = 0; i < shopData.length; i++) {
      cart[shopData[i].sysName] = 0;
    }
    setCartItems(cart);
  }, [shopData]);

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
