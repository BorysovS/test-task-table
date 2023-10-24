import { createSlice } from "@reduxjs/toolkit";
import { fetchTable } from "./operation";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        console.log(state.items);
        state.error = null;
      })
      .addCase(fetchTable.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as null;
      });
  },
});

export const tableReducer = tableSlice.reducer;
