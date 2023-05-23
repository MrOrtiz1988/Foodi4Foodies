import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


let currentLocation;
//findLocation accesses users current location and stores it in the currentLocation variable
const findLocation = () => {
    //Using this function, the browser will ask user permision to access their current location
    //success is what will run when user clicks "Allow"
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        currentLocation = { latitude: latitude, longitude: longitude };
    }
    //If user does not click "Allow", access to current location will fail and error might occur 
    //when attempting search
    const error = () => {
        console.log('you denied access');
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

 findLocation();

function* fetchSearchResults(action) {
    try {
        //I posted the values of currentLocation and the search input's value
        //to the server so that i can use it in the following axios.get()
        yield axios.post('/search', {...currentLocation, term: action.payload});
        //After the POST, i make a GET request using those values and gets stored in 
        //the results variable
        const results = yield axios.get('/search');
        //I sent the results to my results reducer using put
        yield put({type: 'SET_RESULTS', payload: results.data});

    } catch (err) {
        console.log('SAGA/SEARCH error:', err);
    }
}

//searchSaga is what gets exported and imported to _root.saga.js
function* searchSaga() {
    yield takeLatest('SAGA/SEARCH', fetchSearchResults);
}

export default searchSaga;



