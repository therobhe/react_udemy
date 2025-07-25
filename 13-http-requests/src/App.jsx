import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { fetchUserPlacesOnReload, updateUserPlaces } from "./http.js";
import ErrorPage from "./components/Error.jsx";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [isFetching, setIsFetching] = useState(false);

  async function fetchUserPlaces() {
    setIsFetching(true);
    try {
      const fetchedUserPlaces = await fetchUserPlacesOnReload();
      setUserPlaces(fetchedUserPlaces);
    } catch (error) {
      setErrorUpdatingPlaces({ message: error.message || "Failed to fetch user places." });
    }
    setIsFetching(false);
  }

  useEffect(() => {
    fetchUserPlaces();
  });

  async function sendUserPlacesToServer(places) {
    const previousPlaces = userPlaces;
    try {
      const responseMessage = await updateUserPlaces(places);
      console.log(responseMessage);
    } catch (error) {
      setErrorUpdatingPlaces({ message: error.message || "Failes to update user places." });
      setUserPlaces(previousPlaces);
    }
  }

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    sendUserPlacesToServer([...userPlaces, selectedPlace]);
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id));

      try {
        await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id));
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({ message: error.message || "Failed to remove place." });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlaces}>
        {errorUpdatingPlaces && <ErrorPage title="Error occured" message={errorUpdatingPlaces.message} onConfirm={handleError} />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
