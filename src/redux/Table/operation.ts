import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface FetchTableParams {
  offset: number;
  limit: number;
}

type UpdateDataParams = {
  id: number;
  TableData: object;
};

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

export const updateData = createAsyncThunk(
  "table/updateData",
  async ({ id, TableData }: UpdateDataParams, { rejectWithValue }) => {
    try {
      const resp = await axios.patch(`/table/${id}/`, TableData);
      return resp;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTableData = createAsyncThunk(
  "table/deleteTableData",
  async (id: number, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/table/${id}/`);
      return resp;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
