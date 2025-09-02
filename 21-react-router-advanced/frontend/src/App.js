import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import EditEventPage from "./routes/NewEventPage";
import NewEventPage from "./routes/NewEventPage";
import EventDetailPage from "./routes/EventDetailPage";
import EventsPage from "./routes/EventsPage";
import EventsRootLayout from "./routes/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, name: "Home" },
      {
        path: "events",
        element: <EventsRootLayout />,
        name: "EventsRoot",
        children: [
          { index: true, element: <EventsPage />, name: "Events" },
          { path: "new", element: <NewEventPage />, name: "NewEventPage" },
          { path: ":eventID", element: <EventDetailPage />, name: "EventDetailPage" },
          { path: ":eventID/edit", element: <EditEventPage />, name: "EditEventPage" }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
