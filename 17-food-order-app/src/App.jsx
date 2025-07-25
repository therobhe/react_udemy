import FoodList from "./components/order/FoodList.jsx";
import Header from "./components/Header.jsx";
import { OrderContextProvider } from "./store/OrderContext.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <OrderContextProvider>
      {/*<Modal />*/}
      <Header />
      <main>
        <FoodList />
      </main>
    </OrderContextProvider>
  );
}

export default App;
