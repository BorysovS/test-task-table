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
        state.error = null;
      })
      .addCase(fetchTable.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as null;
      });
    //   .addCase(addContact.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.items.push(action.payload);
    //     state.error = null;
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(deleteContact.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const indexContact = state.items.findIndex(
    //       (item) => item.id === action.payload.id
    //     );
    //     state.items.splice(indexContact, 1);
    //     state.error = null;
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const tableReducer = tableSlice.reducer;
