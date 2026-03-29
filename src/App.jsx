import { useState } from "react";
import "./App.css";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [expiry, setExpiry] = useState("");
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // ✅ STATUS FUNCTION
  const getStatus = (qty, expiry) => {
    const today = new Date();
    const expiryDate = new Date(expiry);

    if (today > expiryDate) return "Expired";

    const diff = (expiryDate - today) / (1000 * 60 * 60 * 24);

    if (diff <= 7 && diff > 0) return "Expiring Soon";

    if (qty <= 5) return "Low Stock";

    return "OK";
  };

  // ✅ ADD / UPDATE
  const handleAdd = () => {
    if (!name || !qty || !expiry) return alert("Fill all fields");

    const newItem = {
      name,
      qty: Number(qty),
      expiry,
    };

    if (editIndex !== null) {
      const updated = [...medicines];
      updated[editIndex] = newItem;
      setMedicines(updated);
      setEditIndex(null);
    } else {
      setMedicines([...medicines, newItem]);
    }

    setName("");
    setQty("");
    setExpiry("");
  };

  // ✅ DELETE
  const handleDelete = (index) => {
    const updated = medicines.filter((_, i) => i !== index);
    setMedicines(updated);
  };

  // ✅ EDIT
  const handleEdit = (index) => {
    const item = medicines[index];
    setName(item.name);
    setQty(item.qty);
    setExpiry(item.expiry);
    setEditIndex(index);
  };

  // ✅ FILTER
  const filtered = medicines.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ COUNTS
  const total = medicines.length;
  const expired = medicines.filter(
    (m) => getStatus(m.qty, m.expiry) === "Expired"
  ).length;

  const lowStock = medicines.filter(
    (m) => getStatus(m.qty, m.expiry) === "Low Stock"
  ).length;

  return (
    <div className="container">
      <h1>Medical Dashboard</h1>

      {/* DASHBOARD */}
      <div className="cards">
        <div className="card blue">Total: {total}</div>
        <div className="card red">Expired: {expired}</div>
        <div className="card orange">Low Stock: {lowStock}</div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search medicine..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ADD FORM */}
      <h2>Add Medicine</h2>
      <div className="form">
        <input
          type="text"
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

        <div className="expiry-box">
          <label>Expiry Date</label>
          <input
            type="date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </div>

        <button onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* TABLE */}
      {filtered.length === 0 ? (
        <p className="no-data">No data ❌</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Expiry</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => {
              const status = getStatus(item.qty, item.expiry);

              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.expiry}</td>

                  <td className={status.replace(" ", "-")}>
  {status === "Expired" && "Expired ❌"}
  {status === "Expiring Soon" && "Expiring Soon ⏳"}
  {status === "Low Stock" && "Low Stock ⚠️"}
  {status === "OK" && "OK ✅"}
</td>

                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;