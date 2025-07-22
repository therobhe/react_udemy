import { useEffect, useState } from "react";

export default function useFetch(fetchFn, initValue) {
  const [fetchedData, setFetchedData] = useState(initValue);
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    fetchedData,
    isFetching,
    error,
    setFetchedData,
    setIsFetching,
    setError
  };
}