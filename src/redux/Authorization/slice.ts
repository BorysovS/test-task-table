import { createSlice } from "@reduxjs/toolkit";
// import { signUp, logIn, logOut, refreshUser } from "./operation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
});

export const authReducer = authSlice.reducer;
