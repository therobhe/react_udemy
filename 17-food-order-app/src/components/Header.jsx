import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { OrderContext } from "../store/OrderContext.jsx";

export default function Header() {
  // TODO: Get number of items in cart from context or state
  const { cartItems, setModalIsOpen } = useContext(OrderContext);

  console.log(cartItems);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>Marco's Foodcorner</h1>
      </div>
      <button
        className="text-button"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Cart ({cartItems.length})
      </button>
    </header>
  );
}
