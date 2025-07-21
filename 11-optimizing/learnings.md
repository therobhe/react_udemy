# Learnings Section 13: Optimizing

- React.memo
- useMemo
- useCallback
- keys

are the main three hooks for optimizing performance in React applications. Mainly, by preventing unnecessary re-renders.

## React.memo
React.memo is wrapped arounud a functional component in order to memoize it. Therefore, it compares the component props of the current state with the previous one and only trigger a re-render if the props have change.

## useMemo()
The useMemo hook is used to memoize a value across renders. Most likely, it is used to safe a value from an expensive calculation
Therefore, besides the calculation function, useMemo takes a dependency array with a reference to the values that are used in the calculation. Only if this value changes, the calculation will be executed again, otherwise the old value is returned.

## useCallback()
The useCallback hook is used to memoize a function across renders. On each component render, a function will be evaluated as a new function, which can lead to unnecessary re-renders if a child component uses the function as a prop. Therefore, useCallback takes a function and a dependency array as arguments. The function will only be re-created if one of the dependencies changes, otherwise the old function reference is returned.

## Keys
Keys are used to identify elements in a list. By comparing the keys of the current list with the ones of the previous render, react can effectively detect addition, deletions or changes in the list and only re-render the changed element instead of ecerything. Therefore, it is important to use stable keys instead of indexes. Indexes can change in a growing list, leading to incorrect re-renders due to false references.