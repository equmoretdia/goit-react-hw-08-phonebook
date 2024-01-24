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
      console.log(response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 400') {
        toast.error(
          `Registration failed. To create an account, please ensure you provide a valid name, email address, and a password with a minimum length of 7 characters. Make sure all fields are filled correctly, and try again. If you already have an account, please log in with your existing credentials.`,
          {
            position: 'top-right',
            theme: 'colored',
          }
        );
      } else {
        toast.error(`Sorry, error is occurred`, {
          position: 'top-right',
          theme: 'colored',
        });
      }
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
      console.log(response);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      console.log(error.message);
      if (error.message === 'Request failed with status code 400') {
        toast.error(
          `Invalid login credentials. Please double-check your email and password, and try again!`,
          {
            position: 'top-right',
            theme: 'colored',
          }
        );
      } else {
        toast.error(`Sorry, error is occurred`, {
          position: 'top-right',
          theme: 'colored',
        });
      }
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
