# Section 15: HTTP Requests
- Clienttside React code runs in the browser of a user. Direct DB access is not possible due to security reasons, since the code is visible to the user.
- To access a database, we need to use a server-side code that can securely interact with the database.
- Communication is happening with HTTP-Requests to endpoints (URLs), that the Server knows, so that he manages what a user can and cannot do
- a REST-API is a web server that exposes pre-defined routes to which HTTP-Requests can be sent