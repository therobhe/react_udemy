export async function getAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places."); // this throw breaks the app and goes to the catch block
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({places: places})
  })

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user places.");
  }

  return resData.message;
}

export async function fetchUserPlacesOnReload() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places.");
  }

  return resData.places
}