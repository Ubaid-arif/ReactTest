import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/card";

export const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});
