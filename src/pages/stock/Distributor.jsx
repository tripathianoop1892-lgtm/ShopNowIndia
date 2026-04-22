import React, { useState } from "react";
import "./Distributor.css";

const DistributorStock = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", stock: 50 },
    { id: 2, name: "Crocin", stock: 30 },
  ]);

  const updateStock = (id, value) => {
    const updated = medicines.map((med) =>
      med.id === id
        ? { ...med, stock: med.stock + Number(value) }
        : med
    );
    setMedicines(updated);
  };

  return (
    <div className="stock-container">
      <h2>Stock Update</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine</th>
            <th>Stock</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {medicines.map((med) => (
            <tr key={med.id}>
              <td>{med.id}</td>
              <td>{med.name}</td>
              <td>{med.stock}</td>
              <td>
                <input
                  type="number"
                  placeholder="Qty"
                  onChange={(e) => (med.temp = e.target.value)}
                />
                <button onClick={() => updateStock(med.id, med.temp)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistributorStock;