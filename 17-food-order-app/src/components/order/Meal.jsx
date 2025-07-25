import AddToCart from "../cart/AddToCart.jsx";

export default function Meal() {
  // Todo: get the meal data from props or context

  return (
    <article className="meal">
      <img src="" alt="Meal image" />
      <h3>Meal Name</h3>
      <p className="description">This is a delicious meal description.</p>
      <p className="price">$12.99</p>
      <AddToCart />
    </article>
  );
}
