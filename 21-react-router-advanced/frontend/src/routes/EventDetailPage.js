import EventItem from "../components/EventItem";
import { useRouteLoaderData, redirect } from "react-router-dom";

export default function EventDetailPage() {
  // useRouteLoaderData gives us access to the data of the parent loader by its id
  const data = useRouteLoaderData("event-detail");

  return (
    <EventItem event={data.event} />
  );
}

export async function eventDetailLoader({ request, params }) {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch details for selected event." }), { status: 500 });
  } else {
    return response;
  }
}


// This function catches the submit() call from the EventItem and makes its values available with the request object
export async function deleteEventAction({ request, params }) {
  const id = params.eventID;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event." }), { status: 500 });
  }

  return redirect("/events");
}