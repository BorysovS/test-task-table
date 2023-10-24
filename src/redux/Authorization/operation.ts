import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credential: { username: string; password: string }, thunkAPI) => {
    try {
      // Спробуємо виконати запит на логін
      const resp = await axios.post("/login/", credential);
      // Якщо успішно, повернемо дані користувача
      return resp.data;
    } catch (error: any) {
      // Якщо сталася помилка, використаємо rejectWithValue для обробки помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/login", async (_, _thunkAPI) => {
  // Просто повертаємо null як дані користувача та isLoggedIn: false
  return null;
});
