import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export default function EditEventPage() {
  // useRouteLoaderData gives us access to the data of the parent loader by its id
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>Edit Event Page</h1>
      <EventForm event={data.event} />
    </>
  );
}
