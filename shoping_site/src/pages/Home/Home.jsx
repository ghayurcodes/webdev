import React, { useContext } from 'react';
import "./Home.css";
import { ProductsContext } from "../../context/ProductContext";










const Home = () => {
  const { products, addToCart } = useContext(ProductsContext);

  return (
    <div className="homecont">
      <div className='hh'>
        Products!
        

      </div>

      
      <div className="products">
        {!products || products.length === 0 ? (
          <p className="loading">Loading...</p>
        ) : (
          products.map(p => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} className="product-image" />
              <h3 className="product-title">{p.title}</h3>
              <p className="product-price">${p.price}</p>
              <button className='btn' onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
