import { all } from "redux-saga/effects";
import { fetchPostSaga } from "./sagas/postsSaga";

export function* rootSaga() {
  yield all([fetchPostSaga()]);
}
