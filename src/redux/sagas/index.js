import { all } from 'redux-saga/effects';
import jobSourceSaga from './jobSourceSaga';

export default function* rootSaga() {
    yield all([
        jobSourceSaga()
    ]);
  }