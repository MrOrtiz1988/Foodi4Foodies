import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveToDB (action)  {
    try {
         yield axios.post('/database', action.payload);
         yield put({type: 'SAGA/GET_PLACE_ID_LIST'})
    } catch (err) {
        console.log('SAGA saveToDB error:', err);
      }
}

function* saveSaga () {
    yield takeLatest('SAGA/SAVE', saveToDB);
}

export default saveSaga;