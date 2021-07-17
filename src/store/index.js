import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, counterIsVisible: false };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.counterIsVisible = !state.counterIsVisible;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "toggle")
    return {
      counter: state.counter,
      counterIsVisible: !state.counterIsVisible,
    };

  if (!state.counterIsVisible) return state;

  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + action.amount,
        counterIsVisible: state.counterIsVisible,
      };

    case "decrement":
      return {
        counter: state.counter - 1,
        counterIsVisible: state.counterIsVisible,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
