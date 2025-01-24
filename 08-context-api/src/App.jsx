import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/cart-context";

function App() {

  return (
    /* value ist essential with the default value before consuming the context */
    <CartContextProvider>
      <Header />

      {/*prevents passing the handleItem function as a prop since it stays here inside the app component*/}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
