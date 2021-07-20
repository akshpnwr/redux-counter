import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, counterIsVisible: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.counterIsVisible = !state.counterIsVisible;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
