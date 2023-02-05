import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const inctanceAuth = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

const setAuthHeader = token => {
  inctanceAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  inctanceAuth.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.post('/auth/sign-up', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await inctanceAuth.post('/auth/sign-in', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/sign-out',
  async (_, { rejectWithValue }) => {
    try {
      await inctanceAuth.delete('/auth/sign-out');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await inctanceAuth.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
