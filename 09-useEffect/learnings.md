# Learnings Section 09: useEffect
The useEffect hook is important for managing side effects in a React application.
It runs after the component has rendered and allows the component to fetch data from an API or set up Eventlisteners.

In a dependency array, the props that are used inside the useEffect hook are listed. Only onChange, they will trigger an re-execution of the useEffect hook.
One should target to use as few useEffect hooks as possible, since they can lead to performance issues if used too often.