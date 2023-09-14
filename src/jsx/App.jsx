// Entry File
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { ShopDataProvider } from "./context/ShopDataContext";

export default function App() {
  return (
    <>
      <ShopDataProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ShopDataProvider>
    </>
  );
}
