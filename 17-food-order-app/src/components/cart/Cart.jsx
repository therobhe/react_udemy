import { useContext } from "react";
import { OrderContext } from "../../store/OrderContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const { orderItems, cartItems, removeItemFromCart, setModalStep } = useContext(OrderContext);

  const allMealsThatAreInCartWithQuantity = cartItems.map((cartItem) => {
    const meal = orderItems.find((meal) => meal.id === cartItem.id);
    return {
      ...meal,
      quantity: cartItem.quantity
    };
  });

  const cartTotalPrice = allMealsThatAreInCartWithQuantity.reduce((total, meal) => {
    return total + meal.price * meal.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return <h2>Your Cart is empty.</h2>;
  }

  return (
    <aside id="cart" className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        <li className="cart-item cart-header">
          <p>Meal</p>
          <p className="price">Single Price</p>
          <p className="quantity">Quantity</p>
          <p>Price</p>
          <p></p>
        </li>
        {allMealsThatAreInCartWithQuantity.map((meal) => {
          return (
            <CartItem
              key={meal.id}
              props={meal}
              removeItemFromCart={() => {
                removeItemFromCart(meal.id);
              }}
            />
          );
        })}
      </ul>
      <div className="cart-total">Total Price: {cartTotalPrice}€</div>
      <div className="cart-item-actions">
        <button
          onClick={() => {
            setModalStep(1);
          }}
        >
          >
        </button>
      </div>
    </aside>
  );
}
