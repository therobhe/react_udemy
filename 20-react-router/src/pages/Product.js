import { Navigation } from "../components/Navigation";
import { Link } from "react-router-dom";

const PRODUCT_PAGES = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" }
];

export function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {PRODUCT_PAGES.map((page) => (
          <li key={page.id}>
            <Link to={`/product/${page.id}`}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
