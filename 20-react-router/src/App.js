import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Home";
import { Product } from "./pages/Product";
import RootLayout from "./pages/Root";
import { ErrorPage } from "./pages/Error";
import { ProductsDetailPage } from "./pages/ProductsDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductsDetailPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
