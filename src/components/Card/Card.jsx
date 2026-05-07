import React, { useEffect, useState } from "react";
import "./Card.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Qty: {item.qty}</p>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;