import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isModalUpdateTransactionOpen: false,
  transactionToUpdate: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    openModalUpdateTransaction(state, { payload }) {
      state.isModalUpdateTransactionOpen = true;
      state.transactionToUpdate = payload;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    closeModalUpdateTransaction(state) {
      state.isModalUpdateTransactionOpen = false;
      state.transactionToUpdate = null;
    },
  },
});

export const {
  openModalAddTransaction,
  openModalLogout,
  openModalUpdateTransaction,
  closeModalAddTransaction,
  closeModalLogout,
  closeModalUpdateTransaction,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
