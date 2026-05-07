import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      alert("Invalid credentials ❌");
      return;
    }

    localStorage.setItem("role", user.role);

    if (user.role === "customer") navigate("/medicines");
    if (user.role === "shopkeeper") navigate("/shopkeeper");
    if (user.role === "distributor") navigate("/distributor");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>

      <p onClick={() => navigate("/forgot")}>Forgot Password?</p>
      <p onClick={() => navigate("/register")}>Create Account</p>
    </div>
  );
};

export default Login;