import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//gets all ids for places from database and stores it on the placeIdList reducer
function* getIdList() {
    try {
        const idList = yield axios.get('/database/getId');
        yield put({
            type: 'SET_PLACE_ID_LIST',
            payload: idList.data
        })
    } catch (err) {
        console.log('getting place id error:', err);
      }
}


function* getIdSaga() {
    yield takeLatest('SAGA/GET_PLACE_ID_LIST', getIdList);
}

export default getIdSaga;