import { applyMiddleware, createStore } from 'redux';
import movieAppReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from "./constants/constants";

const persistConfig = {
    key: 'root',
    storage: storage
};

const pReducer = persistReducer(persistConfig, movieAppReducer);

export const store = createStore(pReducer, initialState, applyMiddleware(thunk));
export const persistor = persistStore(store);
