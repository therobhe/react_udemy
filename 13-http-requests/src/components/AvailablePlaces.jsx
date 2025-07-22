import Places from './Places.jsx';
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // TODO: Fetch available places from the server
  useEffect(() =>{
    fetch('http://localhost:3000/places')
      .then((response) => {return response.json()}) // resoles the promise
      .then((responseData) => {
        setAvailablePlaces(responseData.places) // have a look at the backend code to see what the response looks like
      })
  }, [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
