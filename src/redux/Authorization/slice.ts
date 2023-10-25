import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./operation";

interface AuthState {
  username: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  username: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.username = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (_state, _action) => {})
      .addCase(logOut.fulfilled, (state, _action) => {
        state.username = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
