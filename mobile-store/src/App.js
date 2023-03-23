import MainPage from "./components/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/pages/Cart";
import ProdInfo from "./components/pages/ProdInfo";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/cart", element: <Cart /> },
  { path: "/prodInfo", element: <ProdInfo /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}>
        <MainPage />
      </RouterProvider>
    </main>
  );
}

export default App;
