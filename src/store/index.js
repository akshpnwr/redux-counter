const { configureStore } = require('@reduxjs/toolkit');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type == 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }

  return {
    counter: 0,
  };
};

const store = configureStore({
  reducer: counterReducer,
});

export default store;
