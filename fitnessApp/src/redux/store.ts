import AsyncStorage from '@react-native-async-storage/async-storage';
import {compact} from 'lodash';
import logger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import {PERSIST, persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import rootReducer from './rootReducer';
import Config from 'react-native-config';
import application from './application/middlewares';

const persistConfig = {
  key: String(Config.PERSISTENT_KEY_STORE),
  version: 1,
  storage: AsyncStorage,
};

const reducers = persistReducer(persistConfig, rootReducer);

const middlewares = compact([
  thunk,
  __DEV__ ? logger : null,
  application.middleware,
]);

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    // getDefaultMiddleware().prepend([...middlewares, notification.middleware]);
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares);
  },
});

export const persistor = persistStore(store);
