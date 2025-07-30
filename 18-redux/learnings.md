# Section 20: Redux

Redux is an alternative to useContext, it also provides cross-component, or app-wide state management, while being optimized for high-frequenty changing state changes.
Moreover, it prevents the context overload or multiple nested context.providers, while being just 1 state manager.
- 1 Store for everything: theming, user input, authentication state.
- aside from that:

## How Redux works
"It's like youtube" - Components subscribe to this omnipotent central state, but only to the parts they need.
Components NEVER directly manipulate the stores data!!! State changes are done by reducer functions. Which are activated by dispatched actions from a component.

## Important things for implementing redux store
- It is important to include the redux provider at the most top level: the index.js of the root
- to set up a subscription and fetch a certain state value, use the {useSelector} from react-redux
- to init a state change, use the {useDispatch} function from react-redux


- ALWAYS RETURN A NEW PIECE OF STATE WITH ALL INFORMATION! NEVER CHANGE THE EXISTING STATE.
- never do updates to the current state, do re-calculations inside the object return e.g.


## Problem
- keeping track of all states is hard in complex projects, if you forget one, you can mess up big time
- Redux Toolkit is an approach to make this more easy

## Redux Toolkit
- helps seperating concerns inside the store by creating slices of state that belongs together
- you cannot accidentally mutate the original state inside redux.toolkit function like createSlice(), which means, you can directly update some state
