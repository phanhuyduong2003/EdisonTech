import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import bookSlice from "./books";
import rootSaga from "../saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    book: bookSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);
