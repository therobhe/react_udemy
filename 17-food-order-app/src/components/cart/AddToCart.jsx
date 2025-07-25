export default function AddToCart({ addToCart }) {
  return (
    <div className="meal-item-actions">
      <button className="button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
