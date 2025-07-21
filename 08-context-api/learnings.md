# Learnings Section 08: Context API

The context API is a powerful tool to manage shared state in a central position, making it accessible to all components in a React application without the need to pass props down through every level of the component tree.

The context API is used to create an object that holds the shared state and provides it to the consumer components. This is done by creating a context using `React.createContext()`, which returns a Provider and a Consumer component.

Typically the ContextProvider is wrapped around the root of the project, so that all components can access the context. The Provider component takes a `value` prop, which is the shared state that should be accessible to the consumer components.


In the context definition, only the signature of the context is defined, which includes the type of the value that will be provided. This allows TypeScript to infer the type of the context value and provide type safety when consuming the context. The Provider component then returns `<Context.Provider value={contextValue}>`, referencing the signature of the context.

The implementation of the signatures happens in the `contextValue` object.

Within the ContextProvider, the states are typically updated using the `useReducer()` function, which allows for more complex state management. The reducer function takes the current state and an action, and returns a new state based on the action type.