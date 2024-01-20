import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(`Sorry, error is occurred`, {
        position: 'top-right',
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', {
        email,
        password,
      });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      toast.error(`Sorry, error is occurred`, {
        position: 'top-right',
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    clearToken();
    return response.data;
  } catch (error) {
    toast.error(`Sorry, error is occurred`, {
      position: 'top-right',
      theme: 'colored',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(state);
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('There is no token. Exit fetchCurrentUser');
      toast.info(
        'Please log in to use our service! If you are not registered yet, please register first.',
        {
          position: 'top-right',
          theme: 'colored',
        }
      );
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistedToken);
      const response = await axios('/users/current');
      return response.data;
    } catch (error) {
      toast.error(`Sorry, error is occurred`, {
        position: 'top-right',
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
