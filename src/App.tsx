// Entry File
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartContext } from "./CartContext";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState(0);
  const value = { cartItems, setCartItems };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop"
          element={
            <CartContext.Provider value={value}>
              <Shop />
            </CartContext.Provider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartContext.Provider value={value}>
              <Cart />
            </CartContext.Provider>
          }
        />
      </Routes>
    </>
  );
}
