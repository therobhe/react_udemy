# Section 25: Tanstack Query

- Tanstack Query is a library that should simplify sending HTTP requests in order to keep UI and backend in sync.
- Replaces the data fetching within useEffect and the fetch() function and automatically manages received data, loading and error state
- Provides a variety of powerful features like bts-data fetching on tab switch and caching

# Install

`npm i @tanstack/react-query`

# Notes

- You still must write the HTTP request on your own!!! Tanstack just manages the data, error, loading, caching...
- You must wrap all components that should use TanstackQuery with `<QueryClientProvider client={queryClient}>`
