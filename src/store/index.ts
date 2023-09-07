import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addDateCategorySlice from '@src/slices/addDateCategorySlice';
import categoriesListReducer from '@src/slices/categoriesListSlice';
import modalStatusReducer from '@src/slices/modalSlice';
import tasksListSlice from '@src/slices/taskListSlice';

const rootReducer = combineReducers({
  modalStatusReducer,
  categoriesListReducer,
  tasksListSlice,
  addDateCategorySlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
