import { NavLink } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: 1, name: "Highfield" },
  { id: 2, name: "Lollapalooza" },
  { id: 3, name: "Coachella" },
  { id: 4, name: "Hurricane" },
  { id: 5, name: "Southside" }
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column" }}>
        {DUMMY_EVENTS.map((event) => {
          return <NavLink to={event.id}>{event.name}</NavLink>;
        })}
      </ul>
    </>
  );
}
