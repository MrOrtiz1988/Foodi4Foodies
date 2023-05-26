import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//gets all places from database that belongs to the user and stores it on the placeList reducer
function* getPlaces() {
    try {
        const places = yield axios.get('/database/');
        yield put({
            type: 'SET_PLACE_LIST',
            payload: places.data
        })
    } catch (err) {
        console.log('getting places error:', err);
      }
}


function* getPlacesSaga() {
    yield takeLatest('SAGA/GET_PLACES', getPlaces);
}

export default getPlacesSaga;