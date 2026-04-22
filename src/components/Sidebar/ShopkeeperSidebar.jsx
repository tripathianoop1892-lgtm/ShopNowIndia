import React from "react";
import "./ShopkeeperSidebar.css";

const ShopkeeperSidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">ShopNowIndia</h2>

      <p className="role">🏪 Shopkeeper</p>

      <ul className="menu">
        <li>📊 Dashboard</li>
        <li>➕ Add Medicine</li>
        <li>💊 My Medicines</li>
        <li>📦 Orders</li>
        <li>💰 Earnings</li>
      </ul>
    </div>
  );
};

export default ShopkeeperSidebar;