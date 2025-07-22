# Section 16 custom hooks
## Basic Rules
- only use hooks inside React function components or other hooks
- only use hooks at the top level of a React function component (not inside an if statement or loop etc.)

## Tips for creating custom hooks
- use the `use` prefix for the name of the custom hook
- make the custom hook as reusable as possible
- custom hooks return most likely an object of the state and functions to manipulate the state