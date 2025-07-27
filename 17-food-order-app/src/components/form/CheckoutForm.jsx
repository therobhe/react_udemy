import { useActionState, useContext } from "react";
import { OrderContext } from "../../store/OrderContext.jsx";
import { placeOrder } from "../http/http.jsx";

export default function CheckoutForm({ dialogRef }) {
  const { setModalIsOpen, setModalStep, resetCart, cartItems } = useContext(OrderContext);

  const submitNewOrder = async (prevState, formData) => {
    const email = formData.get("email");
    const userName = formData.get("userName");
    const street = formData.get("street");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");

    let errors = [];

    if (!email || !email.includes("@")) {
      errors.push("Please enter a valid email address.");
    }
    if (!userName || userName.trim() === "") {
      errors.push("Username must not be empty.");
    }
    if (!street || street.trim() === "") {
      errors.push("Street must not be empty.");
    }
    if (!postalCode || postalCode.trim() === "") {
      errors.push("Postal code must not be empty.");
    }
    if (!city || city.trim() === "") {
      errors.push("City must not be empty.");
    }

    if (errors.length > 0) {
      console.log("Error has appeared");
      return { error: errors, enteredValues: { email, userName, street, postalCode, city } };
    }

    console.log("Submitting new order...");
    const customerData = { name: userName, email, street, city, "postal-code": postalCode };
    await placeOrder(cartItems, customerData);

    dialogRef.current.close();
    setModalStep(0);
    setModalIsOpen(false);
    resetCart();
    return { error: null };
  };

  const [formData, formAction] = useActionState(submitNewOrder, { error: null });

  return (
    <aside id="customerInformationForm">
      <form action={formAction}>
        <div className="control">
          <label htmlFor="userName">Username</label>
          <input id="userName" type="text" name="userName" defaultValue={formData.enteredValues?.userName} />
        </div>

        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" defaultValue={formData.enteredValues?.email} />
        </div>

        <div className="control">
          <label htmlFor="street">Street</label>
          <input id="street" type="text" name="street" defaultValue={formData.enteredValues?.street} />
        </div>

        <div className="control">
          <label htmlFor="postal-code">Postal Code</label>
          <input id="postal-code" type="text" name="postal-code" defaultValue={formData.enteredValues?.postalCode} />
        </div>

        <div className="control">
          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" defaultValue={formData.enteredValues?.city} />
        </div>

        {formData.error && (
          <ul className="error-list">
            {formData.error.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <p className="form-actions">
          <button className="button">Confirm Order</button>
        </p>
      </form>
    </aside>
  );
}
