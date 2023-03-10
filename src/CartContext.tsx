import { createContext } from "react";

interface ICartContext {
  cartItems: number;
  setCartItems: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<ICartContext>({
  cartItems: 0,
  setCartItems: () => {},
});
