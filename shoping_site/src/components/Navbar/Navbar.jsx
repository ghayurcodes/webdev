// src/components/Navbar/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";
import {ShoppingCart} from "phosphor-react"

export default function Navbar() {
  return (
    <nav className="navbar">
 
        <div className="logo">E-shop</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/cart"><ShoppingCart size={25} color="black" style={{transition:"all 0.3s ease"}} /> </Link>
     
      
    </nav>
  );
}
