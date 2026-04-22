import React from "react";
import { Link } from "react-router-dom";
import "./CustomerSidebar.css";

const CustomerSidebar = () => {
  return (
    <div className="sidebar">
      <h2>ShopNowIndia</h2>

      <ul>
        <li><Link to="/customer">Home</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/medicines">Medicines</Link></li> {/* 👈 YE ADD KAR */}
             </ul>
    </div>
  );
};

export default CustomerSidebar;