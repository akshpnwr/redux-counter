import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const counterIsVisible = useSelector((state) => state.counterIsVisible);
  const dispatch = useDispatch();

  const incrementHandler = (amount = 1) => {
    dispatch({ type: "increment", amount });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterIsVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler()}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
