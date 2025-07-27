export default function CartItem({ props, removeItemFromCart }) {
  const priceXQuantity = props.price * props.quantity;

  return (
    <li className="cart-item">
      <p>{props.name}</p>
      <p className="price">{props.price}€</p>
      <p className="quantity">x{props.quantity}</p>
      <p className="price">{priceXQuantity}€</p>
      <button className="remove-item" onClick={removeItemFromCart}>
        Remove
      </button>
    </li>
  );
}
