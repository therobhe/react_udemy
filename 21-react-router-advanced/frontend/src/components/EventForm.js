import { redirect } from "react-router-dom";
import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const data = useActionData();

  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form className={classes.form} method={method}>
      {data && data.erros && <ul>
        {Object.values(data.erros).map(err => <li key={err}>{err}</li>)}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ""} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ""} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ""} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;

// This action function catches the <Form> submission and makes its values available with the request object
export async function eventAction({ request, params }) {
  const formData = await request.formData();
  const method = request.method;
  console.log(request);


  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    const eventID = params.eventID;
    url = 'http://localhost:8080/events/' + eventID;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'Could not save event.' }),
      {
        status: 500
      });
  }

  return redirect('/events');
}
