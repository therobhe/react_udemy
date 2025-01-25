import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

/* initial value helps to code complete */
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartQuantity: () => {}
});

/*
  function that is immediately called be the useReducer hook
  - state is the guaranteed latest state snapshot (like prevState)
  - action is the action that was dispatched with useReducer
*/
function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
      const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
          const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1
          };
          updatedItems[existingCartItemIndex] = updatedItem;
      } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
          updatedItems.push({
              id: action.payload,
              name: product.title,
              price: product.price,
              quantity: 1
          });
      }

      return {
          ...state,
          items: updatedItems
      };

  }
  if (action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
          (item) => item.id === action.payload.productId
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex]
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems
        };
  }

  return state;
}

/* all the logic for managing the updating state that was previously placed in the app component is now here in our custom Provider */
export default function CartContextProvider({ children }) {
  /*
  to simplify the multiple state update functions that rely on the previous state, we can use a reducer function
  - it takes two arguments: an initial state and a dispatch function that is used to trigger actions which then will
    be handled by the reducer function
   - the useReducer hook takes the reducer function and the initial state as arguments and returns the current state
  */
  const [shoppingCartState, dispatchShoppingCartAction] = useReducer(shoppingCartReducer, {
      items: [],
  });

  function handleAddItemToCart(id) {
    dispatchShoppingCartAction({
        type: 'ADD_ITEM',
        payload: id
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
      dispatchShoppingCartAction({
          type: 'UPDATE_ITEM',
          payload: {
              productId,
              amount
          }
      });
  }

  /*
   this links the dynamic updating state to the context:
  - items is for the reading the state-items in the cart component through the context
  - addItemToCart is for the writing in the product component through the context
  */
  const cartCtx = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartQuantity: handleUpdateCartItemQuantity
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {children}
    </CartContext.Provider>
  );
}