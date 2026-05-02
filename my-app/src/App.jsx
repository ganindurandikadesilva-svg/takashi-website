import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product/:name" element={<ProductDetails />} />
      <Route path="/product/allproducts" element={<AllProducts />} />
    </Routes>
  );
}

export default App;
