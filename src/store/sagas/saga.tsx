// sagas.ts
import { put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { DogActionTypes, FetchDogImagesSuccessAction, FetchDogImagesFailureAction, DogImage } from "../../typings/global";

function* fetchDogImagesSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=50');
    const images: DogImage[] = response.data;
    const action: FetchDogImagesSuccessAction = { type: DogActionTypes.FETCH_DOG_IMAGES_SUCCESS, payload: images };
    yield put(action);
  } catch (error) {
    const action: FetchDogImagesFailureAction = { type: DogActionTypes.FETCH_DOG_IMAGES_FAILURE, payload: "" };
    yield put(action);
  }
}

export function* watchFetchDogImages() {
  yield takeLatest(DogActionTypes.FETCH_DOG_IMAGES, fetchDogImagesSaga);
}
