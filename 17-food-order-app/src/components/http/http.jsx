export async function placeOrder(cartItems, customerData) {
  try {
    const response = await fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ order: { items: cartItems, customer: customerData } })
    });

    if (!response.ok) {
      console.error("Failed to place order", response);
      return;
    }

    console.log("Order was placed successfully");
  } catch (error) {
    console.error("Something went wrong when placing your order: ", error);
  }
}
