import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTransactions,
  getFilteredTransactions,
  getCategories,
  addTransaction,
  deleteTransaction,
} from 'redux/transactions/operations';

const initialState = {
  transactions: [],
  filteredTransactions: [],
  categories: [],
  isLoading: false,
  success: null,
  error: null,
  balanceAfter: 0,
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
};

const extraActions = [
  getTransactions,
  getFilteredTransactions,
  getCategories,
  addTransaction,
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
      state.success = null;
      state.error = null;
      state.balanceAfter = 0;
      state.incomeSummary = 0;
      state.expenseSummary = 0;
      state.periodTotal = 0;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(getFilteredTransactions.fulfilled, (state, { payload }) => {
        state.filteredTransactions = payload.categoriesSummary;
        state.incomeSummary = payload.incomeSummary;
        state.expenseSummary = payload.expenseSummary;
        state.periodTotal = payload.periodTotal;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions.push(payload);
        state.success = payload;
        state.balanceAfter = payload.balanceAfter;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        const { id, balance } = payload;
        const finalTotalBalance = state.balanceAfter || balance;
        const index = state.transactions.findIndex(
          transaction => transaction.id === id
        );
        state.balanceAfter =
          finalTotalBalance - state.transactions[index].amount;
        state.transactions.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        state.success = null;
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
