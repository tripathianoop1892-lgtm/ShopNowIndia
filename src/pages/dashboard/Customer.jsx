import React from "react";

const Customer = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Dashboard 🚀</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        
        <div style={{
          background: "#4CAF50",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Orders</h3>
          <p>12</p>
        </div>

        <div style={{
          background: "#2196F3",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Cart Items</h3>
          <p>5</p>
        </div>

        <div style={{
          background: "#FF9800",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px"
        }}>
          <h3>Offers</h3>
          <p>3</p>
        </div>

      </div>
    </div>
  );
};

export default Customer;