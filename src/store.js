import { applyMiddleware, createStore } from 'redux';
import movieAppReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import { initialState } from "./constants/constants";

const store = createStore(movieAppReducer, initialState, applyMiddleware(thunk));

export default store;
