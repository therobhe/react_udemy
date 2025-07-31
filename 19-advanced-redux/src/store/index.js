import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui-slice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer
    /*    cart: cartSlice.reducer*/
  }
});

/*export const cartActions = cartSlice.actions;*/
export const uiActions = uiSlice.actions;
