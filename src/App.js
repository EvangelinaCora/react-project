import "./App.css";
import {
  
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



// components
import Navbar from "./components/Navbar/Navbar";
import FirstNavbar from "./components/FirstNavbar/FirstNavbar";
import Footer from "./components/footer/footer";

// pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import { ProductPage } from "./pages/ProductPage";
import { CategoryPage } from "./pages/Category/CategoryPage";

const App = () => {
  return (
    <Router>
      <FirstNavbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
