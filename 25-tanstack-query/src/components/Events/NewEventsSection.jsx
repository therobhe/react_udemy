import { useQuery } from '@tanstack/react-query'

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  // use Tanstack hook in order to send the http request to our backend
  // every time the component renders, the hook is executed. So for 1st visit, it actually fetches data and stores the request with the key "events"
  // but on all other renders, it first shows the data from the cache --> in the background executes the fetch again --> updates data if diff registered
  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events'], // define a key that is used for caching
    queryFn: fetchEvents, // define a promise that runs the http request
    staleTime: 3000, // do not refetch query if the component is called within 3 seconds
    gcTime: 60000 // lifetime of the cache - 1 minute
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch Events."} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
