import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./operation";
// import { signUp, logIn, logOut, refreshUser } from "./operation";

interface AuthState {
  username: string | null;
  isLoggedIn: boolean;
}

// Початковий стан
const initialState: AuthState = {
  username: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        // Якщо логін успішний, змінюємо стан на залогованого користувача
        state.username = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (_state, _action) => {
        // Якщо логін не вдалося, робимо необхідну обробку помилки (залежить від вас)
      })
      .addCase(logOut.fulfilled, (state, _action) => {
        // Виконуємо логаут, змінюючи стан на вийшов
        state.username = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
