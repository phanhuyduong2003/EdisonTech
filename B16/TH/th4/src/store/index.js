import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import ProductSlice from "./product";

const persistConfig = {
  key: "root",
  storage,
};

export const allReducers = combineReducers({
  product: ProductSlice,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
});
