import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logOut, fetchCurrentUser } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: {
    isRegistering: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isFetching: false,
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading.isRegistering = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading.isRegistering = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading.isRegistering = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading.isLoggingIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading.isLoggingIn = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading.isLoggingIn = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoading.isLoggingOut = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading.isLoggingOut = false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading.isLoggingOut = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading.isFetching = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading.isFetching = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
