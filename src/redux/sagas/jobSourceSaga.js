import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getJobSourceSaga() {
    try {
      const response = yield axios.get('/api/index');
      yield put({ 
          type: 'SET_JOB_SOURCE', payload: response.data
      })
      console.log(response.data)
    } catch (error) {
        console.log('Error wieth getJobSourceSaga Saga:', error);
        
    }
}

function* jobSourceSaga() {
    yield takeEvery('FETCH_SOURCES', getJobSourceSaga);
}

export default jobSourceSaga;