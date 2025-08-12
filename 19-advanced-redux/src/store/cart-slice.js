import { createSlice } from "@reduxjs/toolkit";

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
