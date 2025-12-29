import { Link, Outlet, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchEventById } from '../../util/http.js';

export default function EventDetails() {
  // use useParams in order to grab the id
  const { id } = useParams();

  // use useQuery in order to fetch the event with the id
  const { data, isPending, isError } = useQuery({
    queryKey: ['events', id],
    queryFn: () => fetchEventById({ eventId: id }),
  });

  // use useMutation in order to handle delete operation with id

  console.log("DATA: ", data);

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isPending && <p>Loading...</p>}
        {isError && <p>Error loading event details.</p>}
        {data && (
          <>
            <header>
              <h1>{data?.title}</h1>
              <nav>
                <button>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img src={`http://localhost:3000/${data?.image}`} alt={data?.title} />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data?.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>{data?.date} @ {data?.time}</time>
                </div>
                <p id="event-details-description">{data?.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
