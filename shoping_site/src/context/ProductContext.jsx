import React, { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]); 


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

 
 const addToCart = (product) => {
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {

    setcart(cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
   
    setcart([...cart, { ...product, quantity: 1 }]);
  }
};


  const removeFromCart = (id) => {
  setcart(cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
      : item
  ).filter(item => item.quantity > 0));
};



  const clearCart = () => setcart([]);

  return (
    <ProductsContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
