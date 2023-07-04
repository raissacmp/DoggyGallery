/* criando o root saga */
import { all } from 'redux-saga/effects';
import { watchFetchDogImages } from '../sagas/saga';

export default function* rootSaga() {
  yield all([
    watchFetchDogImages(),
    // Outros sagas podem ser adicionados aqui
  ]);
}