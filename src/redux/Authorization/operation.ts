import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credential: { username: string; password: string }, thunkAPI) => {
    try {
      const resp = await axios.post("/login/", credential);

      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/login", async (_, _thunkAPI) => {
  return null;
});
