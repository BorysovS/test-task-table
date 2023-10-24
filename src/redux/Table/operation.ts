import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface FetchTableParams {
  offset: number;
  limit: number;
}

// axios.defaults.baseURL = 'https://64315148d4518cfb0e5ec9ad.mockapi.io/api/v1';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api";

export const fetchTable = createAsyncThunk(
  "table/fetchAll",
  async (params: FetchTableParams, thunkAPI) => {
    try {
      const { offset, limit } = params;
      const resp = await axios.get(`/table?offset=${offset}&limit=${limit}`);
      return resp.data.results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkAPI) => {
//     try {
//       const resp = await axios.post("/contacts", contact);
//       return resp.data;
//     } catch (error: any) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id, thunkAPI) => {
//     try {
//       const resp = await axios.delete(`/contacts/${id}`, id);
//       return resp.data;
//     } catch (error: any) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
