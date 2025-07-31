import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
  totalQuantity: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {}
});
