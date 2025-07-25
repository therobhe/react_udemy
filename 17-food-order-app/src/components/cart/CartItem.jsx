export default function CartItem() {
  // Todo: fetch the cart item details from context or props

  return (
    <li className="cart-item">
      <div className="item-details">
        <h3>Meal Name</h3>
        <p className="price">$12.99</p>
        <p className="quantity">x2</p>
      </div>
      <button className="remove-item">Remove</button>
    </li>
  );
}
