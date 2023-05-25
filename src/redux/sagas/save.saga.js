import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveToDB (action)  {
    try {
         yield axios.post('/database', action.payload);
    } catch (err) {
        console.log('SAGA saveToDB error:', err);
      }
}

function* saveSaga () {
    yield takeLatest('SAGA/SAVE', saveToDB);
}

export default saveSaga;