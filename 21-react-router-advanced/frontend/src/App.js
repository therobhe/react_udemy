import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import EditEventPage from "./routes/EditEventPage";
import NewEventPage from "./routes/NewEventPage";
import EventDetailPage from "./routes/EventDetailPage";
import EventsPage, { eventsLoader } from "./routes/EventsPage";
import { eventDetailLoader } from "./routes/EventDetailPage";
import EventsRootLayout from "./routes/EventsRoot";
import { newEventAction } from "./routes/NewEventPage";

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
          {
            index: true,
            element: <EventsPage />,
            name: "Events",
            // the data returned from loader is now available in all children components of EventsPage but not in higher order like EventsRootLayout
            // or Siblings like NewEventPage
            // loaders are executed as soon as we start navigating to the EventsPage
            // this also means that the visual switch to the tab only happens after the fetching has finished!
            // benefit: we dont need a loading state
            // con: delay that looks like nothing is happening --> bad UX
            loader: eventsLoader
          },
          { path: "new", element: <NewEventPage />, name: "NewEventPage", action: newEventAction },
          // in order to use one loaders data in multiple components, we can move the loader to the parent route
          {
            path: ":eventID", loader: eventDetailLoader, id: "event-detail", children: [
              { index: true, element: <EventDetailPage />, name: "EventDetailPage", },
              { path: "edit", element: <EditEventPage />, name: "EditEventPage" }
            ]
          },
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
