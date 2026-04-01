import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Right side */}
      <div className="main-content">
        <Header />
        <div className="page-content">
          <Outlet />
          
        </div>
      </div>

    </div>
  );
}

export default MainLayout;