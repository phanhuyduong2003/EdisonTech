import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./count";

export const store = configureStore({
  reducer: {
    count: countSlice,
  },
});
