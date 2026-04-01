import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">MED SHOP</h2>
      <p className="sub">PHARMACY</p>

      <ul className="menu">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/medicine">Medicine</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/suppliers">Suppliers</Link></li>
        <li><Link to="/expiry">Expiry Alerts</Link></li>
        <li><Link to="/earning">Earning</Link></li>
      </ul>

      <div className="profile">
        <h4>Rajesh Kumar</h4>
        <p>Rajesh Medical Store</p>
      </div>

      <button className="logout">Logout</button>
    </div>
  );
}

export default Sidebar;