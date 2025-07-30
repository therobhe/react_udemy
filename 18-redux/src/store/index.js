import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { loggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    }
  }
});

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    }
  }
});

/**
 * Redux logic goes here
 */
/*const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + action.payload, showCounter: state.showCounter };
  }
  if (action.type === "DECREMENT") {
    return { counter: --state.counter, ...state, showCounter: state.showCounter };
  }
  if (action.type === "TOGGLE") {
    console.log("action recognized");
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
};*/

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// connect react app to the store by providing it at the most top level: index.js in the project root
export default store;

/*const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT" });*/
