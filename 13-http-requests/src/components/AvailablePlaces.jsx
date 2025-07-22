import Places from "./Places.jsx";
import { useEffect, useState } from "react";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { getAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPlaces() {
    setIsFetching(true); // toggle fetching state

    // Error catching
    try {
      const places = await getAvailablePlaces();

      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });

    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  }

  useEffect(() => {
    // GET request to fetch places
    fetchPlaces();
  }, []);


  if (error) {
    return (
      <ErrorPage
        title="Error occured"
        message={error.message}
        onConfirm={() => setError(null)}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
