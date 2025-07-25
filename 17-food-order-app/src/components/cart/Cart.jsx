export default function Cart() {
  return (
    <aside id="cart">
      <h2>Your Cart</h2>
      <p className="empty-cart">Your Cart is empty</p>
      <ul className="cart-items">
        {/* For each item in the cart, render a CartItem component with information from context */}
        {/* <CartItem /> */}
        <li>Cart Item</li>
      </ul>
    </aside>
  );
}
