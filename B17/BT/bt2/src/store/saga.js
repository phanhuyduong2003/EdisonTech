import { all } from "redux-saga/effects";
import {
  watchAddBookSaga,
  watchEditBookSaga,
  watchGetBookSaga,
  watchRemoveBookSaga,
} from "./books/books";

export default function* rootSaga() {
  yield all([
    watchGetBookSaga(),
    watchAddBookSaga(),
    watchEditBookSaga(),
    watchRemoveBookSaga(),
  ]);
}
