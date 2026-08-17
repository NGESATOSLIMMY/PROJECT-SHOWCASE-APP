// DEFINES ALL ROUTES FOR THE APP AND RENDERS THE SHARED NAVBAR/FOOTER
import { HashRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from"./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";

export default function App() {
  return(
    <HashRouter>
      <NavBar>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/products" element={<ProductListPage/>} />
            <Route path="/products/:id" element={<ProductPage/>} />
            <Route path="/add-product" element={<AddProductPage/>}/>
          </Routes>
        </main>
      </NavBar>
    </HashRouter>
  );
}

 