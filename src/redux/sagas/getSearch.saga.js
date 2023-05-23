import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


let currentLocation;
const findLocation = () => {

    const sucess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        currentLocation = { latitude: latitude, longitude: longitude };
    }
    const error = () => {
        console.log('you denied access');
    }
    navigator.geolocation.getCurrentPosition(sucess, error);
}

 findLocation();

function* fetchSearchResults(action) {
    try {
      
        console.log('this is the location', currentLocation);
        yield axios.post('/search', {...currentLocation, term: action.payload});
        const results = yield axios.get('/search');
        console.log(results.data);
        yield put({type: 'SET_RESULTS', payload: results.data});

    } catch (err) {
        console.log('SAGA/SEARCH error:', err);
    }
}


function* searchSaga() {
    yield takeLatest('SAGA/SEARCH', fetchSearchResults);
}

export default searchSaga;



