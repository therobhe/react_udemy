# Section 20: Redux

Redux is an alternative to useContext, it also provides cross-component, or app-wide state management, while being optimized for high-frequenty changing state changes.
Moreover, it prevents the context overload or multiple nested context.providers, while being just 1 state manager.
- 1 Store for everything: theming, user input, authentication state.
- aside from that:

## How Redux works
"It's like youtube" - Components subscribe to this omnipotent central state, but only to the parts they need.
Components NEVER directly manipulate the stores data!!! State changes are done by reducer functions. Which are activated by dispatched actions from a component.

