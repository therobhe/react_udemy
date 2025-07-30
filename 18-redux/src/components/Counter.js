import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  // set up a subscription to the store and extract the counter state
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementCounter = (amount) => {
    dispatch(counterActions.increment(amount));
  };

  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button
          onClick={() => {
            incrementCounter(1);
          }}
        >
          Increment Counter
        </button>
        <button
          onClick={() => {
            incrementCounter(5);
          }}
        >
          Increase by 5
        </button>
        <button onClick={decrementCounter}>Decrement Counter</button>
      </div>
    </main>
  );
};

export default Counter;
