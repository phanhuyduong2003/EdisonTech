import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todos";

export const store = configureStore({
  reducer: {
    todo: reducer,
  },
});
