# Section 21 - React Router
In order to make multi-page SPAs, we use React Router by installing `npm install react-router-dom`

## Implementation steps
1. Create the router provider:

- import ``<RouterProvider router={router}>`` and link it to the path definition of ``createBrowserRouter([{path: "/", element: <Component/>}])``

2. Create Navigation with inbuilt ``<Link to="/path">`` element

- in order to have a central navigation without the need to insert it in each component, we create an own path in the router that wraps the navigation around everything
``{path: "/", element: <RootLayout />, children: [{path...}]}``
- then, we import ``{Outlet}`` in the RootLayout Component, since they represent the children routes, and we can place the ``<Navigation>``bar at the top of the RootLayout.js to have it on all routes.
- This means, we also can define multiple wrapper elements to create individual navigations

3. Catching error links with a custom page

- you can add `errorElement` to your RootLayout definition in createBrowserRouter and link to a custom component that shows the error text

4. Adding dynamic subpages /product/product1, /product/product2

- by using ``:id``, this signals, that the last path is dynamic
- we then take the `useParams()` hook in order to access the dynamic value and display unique content
- typically you then use the ``param.id`` to fetch some kind of value that should then be displayed

5. Going Back with relative paths

- you can define a ``<Link to=".." path="relative">`` in order to go back to the previous path

6. Setting the index page can be done by using `ìndex: true` instead of the path attribute