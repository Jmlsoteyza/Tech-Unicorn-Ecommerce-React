import RouteLayout from "./Pages/RouteLayout";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Shop from "./Components/Shop/Shop";
import SingleShop from "./Components/SingleShop/SingleShop";

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

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteLayout />}>
            <Route index element={<Home products={products} />} />
            <Route path="Shop" element={<Shop products={products} />} />
            <Route
              path="Shop/:id"
              element={<SingleShop products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
