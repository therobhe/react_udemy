# Learnings Section 06: Refs
useRef() is a hook that allows to reference a html element in the DOM. A typical use case is to grab an input value from an input field.

Refs can also be used to store a value independently of the component state. This is useful for values that should not trigger a re-render when they change, such as a timer ID or a mutable value that does not affect the UI.

Refs can be forwarded to child components using the forwardRef() function. This allows parent components to pass refs down to their children, enabling direct access to the child's DOM elements or methods.