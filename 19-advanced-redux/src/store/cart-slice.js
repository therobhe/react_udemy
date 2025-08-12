import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./index";

const initialCartState = {
  items: [{ id: "i1", title: "Test Item", quantity: 1, totalPrice: 18, price: 6 }],
  totalQuantity: 1
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action) => {
      state.totalQuantity++;
      const targetItem = action.payload;
      const existingItem = state.items.find((item) => item.id === targetItem.id);
      if (!existingItem) {
        state.items.push({ id: targetItem.id, price: targetItem.price, quantity: 1, totalPrice: targetItem.price, title: targetItem.title }); // only possible with redux toolkit!!! mutation of org array
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = targetItem.price + existingItem.totalPrice;
      }
    },
    removeItemFromCart: (state, action) => {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

// Action Creator Thunk
// helps keeping components small since we can execute code before we execute our action
export function sendCartToFirebase(cart) {
  // normally we would return the action object {state,action} but by returning a function, we can do custom code instead
  return async (dispatch) => {
    dispatch(uiActions.showNotification({ status: "pending", title: "sending data..", message: "sending data to firebase..." }));

    const sendRequest = async () => {
      const response = await fetch("https://udemy-testing-a7fd5-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error(response.message);
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Successfully sent!",
          message: "Data was sent successfully."
        })
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error appeared!",
          message: "Data was not send."
        })
      );
    }
  };
}
