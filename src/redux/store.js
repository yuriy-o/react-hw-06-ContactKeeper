import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import PhonebookReducer from 'redux/phonebookSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      immutableCheck: true,
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    phonebook: PhonebookReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
