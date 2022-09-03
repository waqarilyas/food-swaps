import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, compose} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import configSlice from './reducers/configSlice';
import userSlice from './reducers/userSlice';
import {reduxStorage} from './storage';

declare var window: any;

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['user', 'config'],
  blacklist: [],
};

const reducers = combineReducers({
  user: userSlice,
  config: configSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

let enhancedCompose = compose;

if (__DEV__) {
  enhancedCompose = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ReduxThunk),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
