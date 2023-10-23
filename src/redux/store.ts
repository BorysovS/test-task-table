import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { tableReducer } from "./Table/slice";
// import storage from "redux-persist/lib/storage";
// import { authReducer } from "./Authorization/slice";
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    table: tableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
