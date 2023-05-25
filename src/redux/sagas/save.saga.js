import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveToDB (action)  {
    console.log('this is the object we want to save', action.payload);
    yield axios.post('/database', action.payload);
}

function* saveSaga () {
    yield takeLatest('SAGA/SAVE', saveToDB);
}

export default saveSaga;