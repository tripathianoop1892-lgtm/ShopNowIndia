import React from "react";
import DistributorSidebar from "../Sidebar/DistributorSidebar";


const DistributorLayout = ({ children }) => {
  return (
    <div className="layout">
      <DistributorSidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default DistributorLayout;