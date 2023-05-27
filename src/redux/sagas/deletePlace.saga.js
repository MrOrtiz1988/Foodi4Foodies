import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Removes place using its id
function* deletePlace(action) {
    try {
        yield axios.delete(`/database/${action.payload}`);
        yield put({
            type: 'SAGA/GET_PLACES'
        })
    } catch (err) {
        console.log('SAGA/Deleting place error:', err);
      }
}

function* deletePaceSaga() {
    yield takeLatest('SAGA/DELETE_PLACE', deletePlace);
}

export default deletePaceSaga;