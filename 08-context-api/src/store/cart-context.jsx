import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

/* initial value helps to code complete */
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartQuantity: () => {}
});


/* all the logic for managing the updating state that was previously placed in the app component is now here in our custom Provider */
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: []
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1
        });
      }

      return {
        items: updatedItems
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex]
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems
      };
    });
  }

  /*
   this links the dynamic updating state to the context:
  - items is for the reading the state-items in the cart component through the context
  - addItemToCart is for the writing in the product component through the contextt
  */
  const cartCtx = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartQuantity: handleUpdateCartItemQuantity
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {children}
    </CartContext.Provider>
  );
}