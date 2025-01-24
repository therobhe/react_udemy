import { createContext } from "react";

/* initial value helps to code complete */
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateCartQuantity: () => {},
});