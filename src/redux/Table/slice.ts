import { createSlice } from "@reduxjs/toolkit";
import { deleteTableData, fetchTable, updateData } from "./operation";

interface Data {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string | null;
}

const tableSlice = createSlice({
  name: "table",
  initialState: {
    items: [] as Data[],
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
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const updatedData = action.payload.data;

        const updatedIndex = state.items.findIndex(
          (item) => item.id === updatedData.id
        );

        if (updatedIndex !== -1) {
          state.items[updatedIndex] = updatedData;
        }
      })
      .addCase(deleteTableData.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexContact = state.items.findIndex(
          (item) => item.id === action.payload.data.id
        );
        state.items.splice(indexContact, 1);
      });
  },
});

export const tableReducer = tableSlice.reducer;
