import React from "react";
import ShopkeeperSidebar from "../Sidebar/ShopkeeperSidebar";
import "./ShopkeeperLayout.css"

const ShopkeeperLayout = ({ children }) => {
  return (
    <div className="layout">
      <ShopkeeperSidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default ShopkeeperLayout;