export async function fetchEvents({ signal, searchTerm }) {
  let url = 'http://localhost:3000/events';

  if (searchTerm) url += `?search=${searchTerm}`;

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function createNewEvent(eventData) {
  const response = await fetch('http://localhost:3000/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const createdEvent = await response.json();

  return createdEvent;
}

export async function fetchImages({ signal }) {
  const response = await fetch('http://localhost:3000/events/images', { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching images');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();

  return images;
}