import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { fromJS } from 'immutable';
import movieAppReducer from '../reducers/reducers';
import { rootSaga } from '.';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(movieAppReducer, fromJS(initialState), applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};
