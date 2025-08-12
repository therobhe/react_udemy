# Section 21: Advanced Redux

Reducer functions must be pure functions, side-effect free and synchronous!
In order to perform side effects like HTTP Requests we will use own action creaators and middleware.

## Implementation order for Redux Store with Redux Toolkit
- install redux toolkit ``npm i @reduxjs/toolkit``
#### Create Store and connect it to the app
- create /store path
- create a store in index.js with ```export const store = configureStore({reducer: {}})``` with import from reduxjs/toolkit
- connect the store to the app: therefore, go to the root index.js and wrap you app component with ``<Provider store={store}></Provider>``
- connect the reducer functions to the store ``reducer: {ui: uiSlice.reducer}``
  - this enables to reference specific parts of the store with ``state.ui.`` in `useSelector()`
- export the actions `èxport const uiActions = uiSlice.actions` for making them available through dispatch()

#### Create slices: small packages that manage state of a specific functionality
  - `ìmport {createSlice} from "@reduxjs/toolkit`
  - ```export const uiSlice = createSlice({name, initialState, reducers: {}})```
  - reducers are the functions that are called via the exported actions of the slice. usually they contain (state, payload) arguments that are used to manipulate the last image of the state, the update logic sits here

#### Use slices in Components
- useSelector() for displaying information from the state
- ```const cartItems = useSelector((state) => state.cart.items)```


- useDispatch() for initiating changes to the state by using the reducer functions
- ```const dispatch = useDispatch()```
- ```const removeItemHandler = () => {dispatch(cartActions.removeItemFromCart())}```


## Async operations and Redux
- fetching or async writing to a DB cannot happen inside the reducer, they must be pure, side-effect-free and synchronous
- typically this is done either inside the components useEffect (ignore redux) or inside the action creator!


The basic question you need to ask yourself is:
Fat Reducers vs Fat Components vs Fat Actions

- if no side effects & no async code --> reducers
- if side effects or async operations --> action creators or inside the component

If both is the case: use useEffect() inside the component


