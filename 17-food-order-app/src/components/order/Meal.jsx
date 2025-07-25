import AddToCart from "../cart/AddToCart.jsx";
import { useContext } from "react";
import { OrderContext } from "../../store/OrderContext.jsx";

export default function Meal(props) {
  // Todo: get the meal data from props or context
  const { addItemToCart } = useContext(OrderContext);

  return (
    <article className="meal-item">
      <img src={`http://localhost:3000/${props.image}`} alt={`Image of ${props.name}`} />
      <h3>{props.name}</h3>
      <p className="meal-item-price">{props.price}€</p>
      <p className="meal-item-description">{props.description}</p>
      <AddToCart
        addToCart={() => {
          addItemToCart(props.id);
        }}
      />
    </article>
  );
}
