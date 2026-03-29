import React, { useState } from "react";
import "./Addmedicine.css";

function Addmedicine({ addMedicine }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleAdd = () => {
    if (!name || !qty || !expiry) {
      alert("Please fill all fields");
      return;
    }

    addMedicine({
      name,
      qty: Number(qty),
      expiry,
    });

    setName("");
    setQty("");
    setExpiry("");
  };

  return (
    <div className="form">
      <h2>Add Medicine</h2>

      <input
        placeholder="Medicine Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      {/* ✅ FIX: Expiry label */}
      <label>Expiry Date</label>
      <input
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Addmedicine;