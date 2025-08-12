import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { getInitialCartState, sendCartToFirebase } from "./store/cart-slice";

// things defined here wont run on each re-render but only on parsing the file (effectively just once)
let isInitial = true;

function App() {
  const cartVisible = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getInitialCartState());
      isInitial = false;
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartToFirebase(cart));
    }
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
