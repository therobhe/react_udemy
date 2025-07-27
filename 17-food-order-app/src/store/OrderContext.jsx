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
  modalStep: 0,
  isFetching: false,
  modalIsOpen: false,
  errorLoadingMeals: null,
  setModalStep: (step) => {},
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  setModalIsOpen: (bool) => {}
});

export function OrderContextProvider({ children }) {
  const [orderItems, setOrderItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStep, setModalStep] = useState(0);

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
    console.log("removeing item from cart", id);

    setCartItems((prevCart) => {
      return prevCart.reduce((newCart, item) => {
        if (item.id !== id) {
          newCart.push(item);
        }
        return newCart;
      }, []);
    });
  };

  const contextValue = {
    orderItems,
    modalIsOpen,
    cartItems,
    modalStep,
    isFetching,
    errorLoadingMeals,
    addItemToCart,
    removeItemFromCart,
    setModalIsOpen,
    setModalStep
  };

  return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
}
