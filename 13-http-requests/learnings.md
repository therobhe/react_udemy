# Section 15: HTTP Requests
- Client side React code runs in the browser of a user. Direct DB access is not possible due to security reasons, since the code is visible to the user.
- To access a database, we need to use a server-side code that can securely interact with the database.
- Communication is happening with HTTP-Requests to endpoints (URLs), that the Server knows, so that he manages what a user can and cannot do
- a REST-API is a web server that exposes pre-defined routes to which HTTP-Requests can be sent

## Implementation reminder
- use `fetch` to send HTTP-Requests inside the useEffect hook to prevent infinite loops
- `fetch` returns a promise, so we need to use `.then()` to handle the response or await the response
- resolve the promise with `response.json()` to get the data in JSON format
- implementing `loadingState` and `errorState` is a good practice to handle the state of the request
- wrapping the fetch call in a try-catch block helps to catch client and server side errors
- when updating or deleting data, it is best practise to reset the state to the previous state inside the catch block