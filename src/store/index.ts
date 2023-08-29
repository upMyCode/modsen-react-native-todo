import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesListReducer from '@src/slices/categoriesListSlice';
import modalStatusReducer from '@src/slices/modalSlice';

const rootReducer = combineReducers({
  modalStatusReducer,
  categoriesListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
