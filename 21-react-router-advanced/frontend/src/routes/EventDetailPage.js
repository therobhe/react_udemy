import EventItem from "../components/EventItem";
import { useLoaderData } from "react-router-dom";

export default function EventDetailPage() {
  const data = useLoaderData();

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