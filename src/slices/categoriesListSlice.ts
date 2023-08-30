import { createSlice } from '@reduxjs/toolkit';

interface Category {
  totalTask: string;
  taskCategoryName: string;
}

interface ModalStatus {
  categories: Category[];
}

const initialState: ModalStatus = {
  categories: [],
};

const categoriesListSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addNewCategory: (state, action) => {
      state.categories.push({
        totalTask: action.payload.totalTask,
        taskCategoryName: action.payload.taskCategoryName,
      });
    },
    updateCategoryList: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { addNewCategory, updateCategoryList } =
  categoriesListSlice.actions;

export default categoriesListSlice.reducer;
