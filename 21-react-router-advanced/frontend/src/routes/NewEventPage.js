import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return (
    <>
      <h1>New Event Page</h1>
      <EventForm method="post" />
    </>
  );
}
