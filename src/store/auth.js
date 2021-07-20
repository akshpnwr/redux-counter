import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    login(state) {
      console.log("login");
      state.isAuthenticated = true;
    },
    logout(state) {
      console.log("logout");
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
