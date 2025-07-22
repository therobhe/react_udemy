import Places from './Places.jsx';
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true); // toggle fetching state
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }
    fetchPlaces();

/*    fetch('http://localhost:3000/places')
      .then((response) => {return response.json()}) // resoles the promise
      .then((responseData) => {
        setAvailablePlaces(responseData.places) // have a look at the backend code to see what the response looks like
      })*/
  }, [])

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
