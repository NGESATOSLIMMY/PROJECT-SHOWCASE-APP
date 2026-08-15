//DEFINES ALL ROUTES FOR THE APP AND RENDERS THE SHARED NAVBAR/FOOTER

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ProductListPage from "./components/ProductListPage";
import ProductPage from "./components/ProductPage";
import AddProductPage from "./components/AddProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
          </Routes>
        </main>
      </Navbar>
    </BrowserRouter>
  );
}
