import { createStore } from "redux";

const counterReducer = (
  state = { counter: 0, counterIsVisible: true },
  action
) => {
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

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
