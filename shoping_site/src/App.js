// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import ProductContextProvider, { ProductsContext } from "./context/ProductContext";
import "./App.css"
import About from "./pages/About/About";
import C from "./pages/Contact/C";

function App() {
  return (
    <Router>
      <Navbar/>
        <ProductContextProvider>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<C/>} />
        
      </Routes>
        </ProductContextProvider>
      
    </Router>
  );
}

export default App;
