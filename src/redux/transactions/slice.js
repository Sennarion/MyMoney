import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTransactions,
  getFilteredTransactions,
  getCategories,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from 'redux/transactions/operations';

const initialState = {
  transactions: [],
  filteredTransactions: [],
  categories: [],
  isLoading: false,
  isSuccessfulAddition: null,
  error: null,
  balanceAfter: 0,
};

const extraActions = [
  getTransactions,
  getFilteredTransactions,
  getCategories,
  addTransaction,
  updateTransaction,
  deleteTransaction,
];
const getActions = type => extraActions.map(action => action[type]);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearTransactions(state) {
      state.transactions = [];
      state.filteredTransactions = [];
      state.categories = [];
      state.isLoading = false;
      state.error = null;
      state.balanceAfter = 0;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(getFilteredTransactions.fulfilled, (state, { payload }) => {
        state.filteredTransactions = payload;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions.push(payload);
        state.balanceAfter = payload.balanceAfter;
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        const index = state.transactions.findIndex(
          transaction => transaction.id === payload.id
        );
        state.transactions.splice(index, 1, payload);
        state.balanceAfter = payload.balanceAfter;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          transaction => transaction.id === action.meta.arg
        );
        state.transactions.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const { clearTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
