import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IDog } from "../types/types";
import {
  fetchDogsFailure,
  fetchDogsSuccess
} from "../../actions/dogsActions/dogsActions";
import { dogsTypes } from "../../Actiontypes/dogsTypes";

const getDogs = () =>
  axios.get<IDog[]>("https://jsonplaceholder.typicode.com/todos");

function* fetchDogsSaga() {
  try {
    const response = yield call(getDogs);
    yield put(
      fetchDogsSuccess({
        dogs: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchDogsFailure({
        error: e.message
      })
    );
  }
}

function* dogsSaga() {
  yield all([takeLatest(dogsTypes.FETCH_DOG_REQUEST, fetchDogsSaga)]);
}

export default dogsSaga;