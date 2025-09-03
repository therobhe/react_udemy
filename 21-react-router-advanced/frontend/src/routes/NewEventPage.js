import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return (
    <>
      <h1>New Event Page</h1>
      <EventForm />
    </>
  );
}

// This action function catches the <Form> submission and makes its values available with the request object
export async function newEventAction({ request, params }) {
  const formData = await request.formData();
  console.log("formData", formData);

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'Could not save event.' }),
      {
        status: 500
      });
  }

  return redirect('/events');
}
