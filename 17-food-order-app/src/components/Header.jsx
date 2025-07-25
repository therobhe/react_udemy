import logo from "../assets/logo.jpg";

export default function Header() {
  // TODO: Get number of items in cart from context or state

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>Marco's Foodcorner</h1>
      </div>
      <button className="text-button">Cart (3)</button>
    </header>
  );
}
