import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store";
import Notification from "./components/UI/Notification";

// things defined here wont run on each re-render but only on parsing the file (effectively just once)
let isInitial = true;

function App() {
  const cartVisible = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    async function sendCartToFirebase() {
      dispatch(uiActions.showNotification({ status: "pending", title: "sending data..", message: "sending data to firebase..." }));

      const response = await fetch("https://udemy-testing-a7fd5-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error(response.message);
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Successfully sent!",
          message: "Data was sent successfully."
        })
      );
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartToFirebase().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "An error has occuerd",
          message: "Something went wrong when saving the data to firebase"
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
