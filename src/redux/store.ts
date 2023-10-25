import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "./Table/slice";
import { authReducer } from "./Authorization/slice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    table: tableReducer,
  },
});
