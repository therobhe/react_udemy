import Meal from "./Meal.jsx";
import { useContext } from "react";
import { OrderContext } from "../../store/OrderContext.jsx";

export default function FoodList() {
  const { orderItems: availableMeals } = useContext(OrderContext);

  return (
    <section id="food-list">
      <h2 className="text-center">Available Meals</h2>
      <ul id="meals">
        {availableMeals.map((meal) => {
          return <Meal key={meal.id} {...meal} />;
        })}
      </ul>
    </section>
  );
}
