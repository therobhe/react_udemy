import { Link, useParams } from "react-router-dom";

export function ProductsDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>PDP</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Go Back
        </Link>
      </p>
    </>
  );
}
