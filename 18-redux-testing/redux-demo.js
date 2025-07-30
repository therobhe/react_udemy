/**
 * This here is node.js code
 */
const redux = require("redux");

// setting up the reducer function that updates the store
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    state.counter++;
  }
  if (action.type === "DECREMENT") {
    state.counter--;
  }
  return {
    counter: state.counter
  };
};

// setting up the store by connecting it with the reducer function that manipulates it
const store = redux.createStore(counterReducer);

// getState() is a default function from .createStore() which returns the latest state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// set up the "component" (here just a function) to listen to the store
store.subscribe(counterSubscriber);

// create a dispatched action
store.dispatch({ type: "LOL" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
