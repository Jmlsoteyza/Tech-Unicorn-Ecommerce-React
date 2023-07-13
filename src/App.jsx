import RouteLayout from "./Pages/RouteLayout";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Shop from "./Components/Shop/Shop";
import SingleShop from "./Components/SingleShop/SingleShop";
import Cart from "./Components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        console.log(setProducts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home products={products} />} />
            <Route path="Shop" element={<Shop products={products} />} />
            <Route
              path="Shop/:id"
              element={<SingleShop products={products} />}
            />
            <Route path="Shop/:id/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
