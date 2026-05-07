import React from "react";
import { Link } from "react-router-dom";   // ✅ IMPORTANT
import "./distributorsidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>ShopNowIndia</h2>

      <ul>
        <li><Link to="/distributor">Dashboard</Link></li>

        <li><Link to="/add-medicine">Add Medicine</Link></li>

        <li><Link to="/medicines-list">My Medicines</Link></li>

        <li><Link to="/orders">Orders</Link></li>

        <li><Link to="/stock">Stock Update</Link></li>
        
        <li><Link to="/low-stock">Low Stock</Link></li>

        <li><Link to="/expiring">Expiring Soon</Link></li>

        <li><Link to="/earnings">Earnings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;