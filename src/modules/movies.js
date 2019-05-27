import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { setResults, setSelectedMovie } from '../actions/actions';
import { endPoint, actionTypes } from '../constants/constants';

// Sagas

export function* fetchMoviesAsync(action) {
  const { inputValue, filter } = action.payload;

  const res = yield call(fetch, `${endPoint}?searchBy=${filter}&search=${inputValue}`);
  const movies = yield res.json();

  yield put(setResults(movies));
}

export function* watchFetchMovies() {
  yield takeLatest(actionTypes.FETCH_MOVIES, fetchMoviesAsync);
}

export function* fetchMovieByIdAsync(action) {
  const res = yield call(fetch, `${endPoint}/${action.payload}`);
  const movie = yield res.json();

  yield put(setSelectedMovie(movie));
}

export function* watchFetchMovieById() {
  yield takeLatest(actionTypes.FETCH_MOVIE, fetchMovieByIdAsync);
}

// Movies Saga
export function* moviesSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMovieById(),
  ]);
}
