import { Link, Outlet, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEventById, deleteEventById, queryClient } from '../../util/http.js';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  // use useParams in order to grab the id
  const { id } = useParams();
  const navigate = useNavigate();

  // use useQuery in order to fetch the event with the id
  const { data, isPending, isError } = useQuery({
    queryKey: ['events', id],
    queryFn: () => fetchEventById({ eventId: id }),
  });

  // use useMutation in order to handle delete operation with id
  const { mutate, isPending: isDeleting, isError: isDeleteError } = useMutation({
    mutationFn: () => deleteEventById({ eventId: id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        exact: false,
        refetchType: 'none'
      }
      );
      navigate('../')
    }

  });

  const handleDelete = () => {
    mutate();
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {(isPending || isDeleting) && <LoadingIndicator />}
        {isError && <ErrorBlock title="An error occurred" message="Failed to load event details." />}
        {isDeleteError && <ErrorBlock title="An error occurred" message="Failed to delete event." />}
        {data && (
          <>
            <header>
              <h1>{data?.title}</h1>
              <nav>
                <button onClick={handleDelete}>Delete</button>
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
