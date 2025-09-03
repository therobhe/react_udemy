import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  /*  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();*/

  // the problem here is that the fetching is happening on component render
  // we can improve the UX by triggering the API call when initializing the route change to this component with the loader: ()=>{} prop
  //
  /*  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);*/
  const data = useLoaderData();
  const events = data.events;

  /*  if (data.isError === true) {
    return <p>Something went wrong when fetching the events</p>;
  }*/

  return (
    <>
      {/*      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>*/}
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

// this code will be executed in the browser, so we have access to the browser apis which is the typical use case for loaders
// best practise for loader code is to export the loader code from the component where it is used
export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  // error handling is now not happening manually via a state, but automatic
  if (!response.ok) {
    /*return { isError: true, message: "Could not fetch events" };*/

    // when a Error is thrown from a loader, it will trigger the closest Error component! Inside there, we can access the error object via useRouteError()
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), { status: 500 });
  } else {
    return response;
  }
}
