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
          month: query.month,
          year: query.year,
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

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await inctanceAuth.delete(`/transactions/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
