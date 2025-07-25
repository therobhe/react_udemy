import Meal from "./Meal.jsx";

export default function FoodList() {
  // Todo: fetch the available meals from the server

  return (
    <section id="food-list">
      <h2>Available Meals</h2>
      {/*forEach available meal*/}
      <Meal />
    </section>
  );
}
