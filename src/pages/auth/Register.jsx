import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exist = users.find((u) => u.email === form.email);

    if (exist) {
      alert("User already exists ❌");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully ✅");
    navigate("/");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      >
        <option value="customer">Customer</option>
        <option value="shopkeeper">Shopkeeper</option>
        <option value="distributor">Distributor</option>
      </select>

      <button className="register-btn" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;