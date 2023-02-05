export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.username;

export const selectIsRefreshCurrentUser = state => state.auth.isRefreshUser;

export const selectToken = state => state.auth.token;

export const selectAuthErrorStatus = state => state.auth.error;
