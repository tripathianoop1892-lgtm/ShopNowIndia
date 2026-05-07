import React, { useEffect, useState } from "react";
import "./MedicineList.css";

const MedicineList = ({ cart, setCart }) => {
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    setMeds(JSON.parse(localStorage.getItem("shopMedicines") || "[]"));
  }, []);

  const addToCart = (item) => {
    if (item.stock <= 0) return;

    const exist = cart.find((c) => c.id === item.id);

    if (exist) {
      setCart(cart.map((c) =>
        c.id === item.id ? { ...c, qty: c.qty + 1 } : c
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }

    // reduce stock
    const updated = meds.map((m) =>
      m.id === item.id ? { ...m, stock: m.stock - 1 } : m
    );

    localStorage.setItem("shopMedicines", JSON.stringify(updated));
    setMeds(updated);
  };

  return (
    <div className="medicine-container">
      <h2>💊 Medicines</h2>

      <div className="medicine-grid">
        {meds.map((m) => (
          <div className="card" key={m.id}>
            <h3>{m.name}</h3>
            <p>Stock: {m.stock}</p>
            <button onClick={() => addToCart(m)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineList;