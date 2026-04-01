import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Left Side */}
      <div>
        <h2 className="title">Dashboard</h2>
        <p className="welcome">
          Welcome back Rajesh Medical Store 
          <span className="verified"> ✔ Verified</span>
        </p>
      </div>

      {/* Right Side */}
      <div className="header-right">
        <button className="add-btn">+ Add Medicine</button>

        <div className="notification">
          🔔
          <span className="badge">2</span>
        </div>

        <div className="profile-box">
          <div className="avatar">RM</div>
          <div>
            <p className="name">Rajesh Kumar</p>
            <p className="role">Shopkeeper ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;