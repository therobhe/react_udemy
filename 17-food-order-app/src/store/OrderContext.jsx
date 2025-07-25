import { createContext, useEffect, useState } from "react";

/**
 * Todo: create context for managing order state
 * must include:
 * - state for order items
 * - fetch functions to get and send order to backend
 */
export const OrderContext = createContext({
  orderItems: [],
  addOrderItem: (item) => {},
  removeOrderItem: (id) => {}
});

export function OrderContextProvider({ children }) {
  //TODO: fetch the meals from the server in useEffect and store them inside state
  //TODO: implement addOrderItem and removeOrderItem functions
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      console.log("Fetching meals from the server...");
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }

        const data = await response.json();
        setOrderItems(data);

        console.log("Meals fetched successfully:", data);
      } catch (error) {
        return console.error("Error fetching meals:", error);
      }
    }

    fetchMeals();
  }, []);

  const addOrderItem = (item) => {
    console.log("meal added");
  };

  const removeOrderItem = (item) => {
    console.log("meal removed");
  };

  const contextValue = {
    orderItems,
    addOrderItem,
    removeOrderItem
  };

  return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
}
