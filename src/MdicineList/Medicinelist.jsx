import React, { useState } from "react";
import "./Medicinelist.css";
function Medicinelist({ medicines = [], deleteMedicine, updateMedicine }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (index) => {
    setEditIndex(index);
    setEditData(medicines[index] || {});
  };

  const saveEdit = () => {
    if (editIndex !== null) {
      updateMedicine(editIndex, editData);
      setEditIndex(null);
      setEditData({});
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Qty</th>
          <th>Expiry</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {!medicines || medicines.length === 0 ? (
          <tr>
            <td colSpan="4">No data ❌</td>
          </tr>
        ) : (
          medicines.map((med, i) => (
            <tr key={i}>
              {editIndex === i ? (
                <>
                  <td>
                    <input
                      value={editData.name || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      value={editData.qty || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, qty: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={editData.expiry || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, expiry: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={saveEdit}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{med?.name}</td>
                  <td>{med?.qty}</td>
                  <td>{med?.expiry}</td>
                  <td>
                    <button onClick={() => startEdit(i)}>Edit</button>
                    <button onClick={() => deleteMedicine(i)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Medicinelist;