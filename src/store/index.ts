import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addDateCategorySlice from '@src/slices/addDateCategorySlice';
import categoriesListReducer from '@src/slices/categoriesListSlice';
import modalStatusReducer from '@src/slices/modalSlice';
import tasksListSlice from '@src/slices/taskListSlice';
import {
  createTransform,
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [
    createTransform(JSON.stringify, (toRehydrate) => {
      return JSON.parse(toRehydrate, (key, value) => {
        return typeof value === 'string' &&
          value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
          ? new Date(value)
          : value;
      });
    }),
  ],
};

const rootReducer = combineReducers({
  modalStatusReducer,
  categoriesListReducer,
  tasksListSlice,
  addDateCategorySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
