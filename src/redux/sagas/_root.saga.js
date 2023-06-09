import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import searchSaga from './getSearch.saga';
import saveSaga from './save.saga';
import getIdSaga from './placeId.saga';
import getPlacesSaga from './getPlaces.saga';
import setFavoritesSaga from './setFavorites.saga';
import deletePaceSaga from './deletePlace.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    searchSaga(), // runs the function from getSearch.saga
    saveSaga(),  // runs the function from save.saga
    getIdSaga(),  // runs the function from placeId.saga
    getPlacesSaga(), // runs the function from getPlaces.saga
    setFavoritesSaga(), // runs the function from setFavorites.saga
    deletePaceSaga(), // runs the function from deletePlace.saga
  ]);
}
