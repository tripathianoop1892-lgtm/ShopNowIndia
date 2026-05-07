import React from "react";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout-container">
      <h2>💳 Payment</h2>

      <h3>Total: ₹{total}</h3>

      <button className="pay-btn">
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;