# Learnings Section 14: Class-Based Components

Prior to React 16.8, class-based components were the primary way to create components that included state and lifecycle methods.
Although they are still supported, functional components with hooks have become the go-to approach.

However, they can still work together!

## Key concepts
- classes with constructors, `this` keyword, and `super()`, internal vars and methods
- render() method, that defines the output to be displayed
- lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` instead of hooks

## Difference to functional components
- big benefit: class components can build error boundaries
- functional component are regular JS functions that return renderable results.
- the lifecycle methods of class-based components are represented by hooks in functional components:
  - `componentDidMount` is equivalent to `useEffect(() => {}, [])`
  - `componentDidUpdate` is equivalent to `useEffect(() => {}, [dependencies])`
  - `componentWillUnmount` is equivalent to the cleanup function in `useEffect(() => {}, [])`