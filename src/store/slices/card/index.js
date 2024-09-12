import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Store the products array here
  loading: false,
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = cardSlice.actions;
export default cardSlice.reducer;
