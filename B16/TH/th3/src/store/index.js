import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
