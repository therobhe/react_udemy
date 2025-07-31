import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { showCart: false };

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    }
  }
});
