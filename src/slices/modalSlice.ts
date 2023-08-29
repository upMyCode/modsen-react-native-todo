import { createSlice } from '@reduxjs/toolkit';

interface ModalStatus {
  status: boolean;
}

const initialState: ModalStatus = {
  status: false,
};

const modalSlice = createSlice({
  name: 'modalStatus',
  initialState,
  reducers: {
    changeStatusToActive: (state) => {
      state.status = true;
    },
    changeStatusToDisable: (state) => {
      state.status = false;
    },
  },
});

export const { changeStatusToActive, changeStatusToDisable } =
  modalSlice.actions;

export default modalSlice.reducer;
