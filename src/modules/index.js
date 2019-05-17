import { all } from 'redux-saga/effects';

import {
  moviesSaga,
} from './movies';

function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

export {
  rootSaga,
};
