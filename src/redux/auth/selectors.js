export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRegistering = state => state.auth.isLoading.isRegistering;
export const selectIsLoggingIn = state => state.auth.isLoading.isLoggingIn;
export const selectIsLoggingOut = state => state.auth.isLoading.isLoggingOut;
export const selectIsFetching = state => state.auth.isLoading.isFetching;
