import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return <h1>Details for Event: {params.eventID}</h1>;
}
