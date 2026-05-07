import React, { useState } from "react";
import "./Distributor.css";

const Distributor = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Rahul",
      medicine: "Paracetamol",
      quantity: 2,
      status: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status } : o
    );
    setOrders(updated);
  };

  return (
    <div className="order-container">
      <h2>Distributor Orders</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Medicine</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.medicine}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
              <td>
                {item.status === "Pending" && (
                  <>
                    <button onClick={() => updateStatus(item.id, "Approved")}>
                      Approve
                    </button>
                    <button onClick={() => updateStatus(item.id, "Rejected")}>
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Distributor;