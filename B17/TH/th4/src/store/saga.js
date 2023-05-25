import { all } from "redux-saga/effects";
import {
  watchAddUserSaga,
  watchGetUserSaga,
  watchRemoveUserSaga,
} from "./users/users";

export default function* rootSaga() {
  yield all([watchAddUserSaga(), watchRemoveUserSaga(), watchGetUserSaga()]);
}
