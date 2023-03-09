// Entry File
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartContext } from "./CartContext";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop"
          element={
            <CartContext.Provider value={null}>
              <Shop />
            </CartContext.Provider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartContext.Provider value={null}>
              <Cart />
            </CartContext.Provider>
          }
        />
      </Routes>
    </>
  );
}
