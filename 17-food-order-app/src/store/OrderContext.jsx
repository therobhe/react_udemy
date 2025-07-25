import { createContext, useEffect, useState } from "react";

/**
 * Todo: create context for managing order state
 * must include:
 * - state for order items
 * - fetch functions to get and send order to backend
 */
export const OrderContext = createContext({
  orderItems: [],
  cartItems: [],
  isFetching: false,
  errorLoadingMeals: null,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {}
});

export function OrderContextProvider({ children }) {
  //TODO: fetch the meals from the server in useEffect and store them inside state
  //TODO: implement addItemToCart and removeItemFromCart functions
  const [orderItems, setOrderItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Async and Error handling states
  const [errorLoadingMeals, setErrorLoadingMeals] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }

        const data = await response.json();
        setOrderItems(data);
      } catch (error) {
        setErrorLoadingMeals({ message: error.message });
        console.error("Error fetching meals:", error);
      }

      setIsFetching(false);
    }

    fetchMeals();
  }, []);

  const addItemToCart = (id) => {
    // Check if item is already in the cart, if so, update its quantity
    // If not, add it to the cart with quantity 1
    if (cartItems.some((item) => item.id === id)) {
      setCartItems((prevCart) => {
        return prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      });
      console.log("updated quantity for", id);
      return;
    } else {
      setCartItems((prevCart) => {
        return [...prevCart, { id, quantity: 1 }];
      });
      console.log("added new item to cart", id);
    }
  };

  const removeItemFromCart = (id) => {
    // TODO: search for item id and remove it from the cart
    console.log("meal removed: ", id);
  };

  const contextValue = {
    orderItems,
    cartItems,
    isFetching,
    errorLoadingMeals,
    addItemToCart,
    removeItemFromCart
  };

  return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
}
