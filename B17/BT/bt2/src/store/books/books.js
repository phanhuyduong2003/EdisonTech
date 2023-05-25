import { createSlice, createAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
const initialState = {
  books: [],
  status: "idle",
};
export const getBookAsync = createAction("books/getBookAsync");
export const addBookAsync = createAction("books/addBookAsync");
export const editBookAsync = createAction("books/editBookAsync");
export const removeBookAsync = createAction("books/removeBookAsync");

function* getBookSaga(action) {
  const data = yield call(() =>
    axios.get("http://localhost:3000/books", action.payload)
  );
  yield put(getBook(data?.data));
}
function* addBookSaga(action) {
  const data = yield call(() =>
    axios.post("http://localhost:3000/books", action.payload)
  );
  yield put(addBook(data));
  yield put(getBookAsync());
}
function* editBookSaga(action) {
  const data = yield call(() =>
    axios.put(
      `http://localhost:3000/books/${action.payload.id}`,
      action.payload
    )
  );
  yield put(editBook(data));
  yield put(getBookAsync());
}
function* removeBookSaga(action) {
  yield call(() =>
    axios.delete(`http://localhost:3000/books/${action.payload.id}`)
  );
  yield put(removeBook(action.payload));
  yield put(getBookAsync());
}

export function* watchGetBookSaga() {
  yield takeLatest(getBookAsync, getBookSaga);
}
export function* watchAddBookSaga() {
  yield takeLatest(addBookAsync, addBookSaga);
}
export function* watchEditBookSaga() {
  yield takeLatest(editBookAsync, editBookSaga);
}
export function* watchRemoveBookSaga() {
  yield takeLatest(removeBookAsync, removeBookSaga);
}
export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBook: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    removeBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books.splice(index, 1);
      }
    },
  },
});
export const { getBook, addBook, editBook, removeBook } = bookSlice.actions;
export const selectBook = (state) => state.book;
export default bookSlice.reducer;
