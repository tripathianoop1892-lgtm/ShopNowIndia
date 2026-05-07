import React from "react";
import CustomerSidebar from "../Sidebar/CustomerSidebar";
import "./CustomerLayout.css";

const CustomerLayout = ({ children }) => {
  return (
    <div className="layout">
      <CustomerSidebar />
      <div className="main">
        {children}
      </div>
    </div>
  );
};

export default CustomerLayout;