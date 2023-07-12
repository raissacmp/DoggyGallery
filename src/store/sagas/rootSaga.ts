import { all, fork } from "redux-saga/effects";
import dogsSaga from "./dogsSaga/dogsSaga";

export function* rootSaga() {
  yield all([fork(dogsSaga)]);
}
