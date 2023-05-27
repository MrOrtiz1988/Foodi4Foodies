import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Sends the id using params to change is_favorite from false to true 
function* setFavorites(action) {
    try {
        yield axios.put(`/database/${action.payload}`);
        yield put({
            type: 'SAGA/GET_PLACES'
        })
    } catch (err) {
        console.log('SAGA/setting to favorites error:', err);
      }
}


function* setFavoritesSaga() {
    yield takeLatest('SAGA/CHANGE_TO_FAVORITES', setFavorites);
}

export default setFavoritesSaga;