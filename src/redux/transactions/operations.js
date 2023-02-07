import { createAsyncThunk } from '@reduxjs/toolkit';
import { inctanceAuth } from 'redux/auth/operations';

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.get('/transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilteredTransactions = createAsyncThunk(
  'transactions/getFilteredTransactions',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.get('/transactions-summary', {
        params: {
          month: query.selectedMonth,
          year: query.selectedYear,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.get('/transaction-categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (newTransaction, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.post('/transactions', newTransaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ transaction, id }, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.patch(
        `/transactions/${id}`,
        transaction
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.delete(`/transactions/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
