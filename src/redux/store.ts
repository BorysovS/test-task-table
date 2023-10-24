import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "./Table/slice";
import { authReducer } from "./Authorization/slice";
// import storage from "redux-persist/lib/storage";
// import { authReducer } from "./Authorization/slice";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    table: tableReducer,
  },
});
