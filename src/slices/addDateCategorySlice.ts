import { createSlice } from '@reduxjs/toolkit';

interface DateCategory {
  dateCategory: string;
}

const initialState: DateCategory = {
  dateCategory: 'all',
};

const addDateCategorySlice = createSlice({
  name: 'dateCategory',
  initialState,
  reducers: {
    changeDateCategory: (state, action) => {
      state.dateCategory = action.payload.dateCategory;
    },
  },
});

export const { changeDateCategory } = addDateCategorySlice.actions;

export default addDateCategorySlice.reducer;
