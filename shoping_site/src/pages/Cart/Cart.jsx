import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(ProductsContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="btn-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
