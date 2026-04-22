import React, { useEffect, useState } from "react";
import "./Distributor.css";

const Distributor = () => {
  const [medicines, setMedicines] = useState([]);

  // ✅ Load data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("medicines")) || [];
    setMedicines(data);
  }, []);

  return (
    <div className="main-content">
      <div className="list-container">
        <h2>My Medicines</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Type</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Batch</th>
              <th>MFG</th>
              <th>EXP</th>
            </tr>
          </thead>

          <tbody>
            {medicines.length === 0 ? (
              <tr>
                <td colSpan="8">No Medicines Added</td>
              </tr>
            ) : (
              medicines.map((med, index) => (
                <tr key={index}>
                  <td>{med.name}</td>
                  <td>{med.company}</td>
                  <td>{med.type}</td>
                  <td>₹ {med.price}</td>
                  <td>{med.stock}</td>
                  <td>{med.batch}</td>
                  <td>{med.mfgDate}</td>
                  <td>{med.expDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Distributor;