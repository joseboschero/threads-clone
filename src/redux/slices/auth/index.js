import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  currentUser: null,
  loggedAt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = initialState.accessToken;
      state.currentUser = initialState.currentUser;
    },
  },
});

export const { setAccessToken, setCurrentUser, clearAccessToken } = authSlice.actions;

export default authSlice.reducer;
