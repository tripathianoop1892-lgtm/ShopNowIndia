import React, { useEffect, useState } from "react";

const Shopkeeper = () => {
  const [distMeds, setDistMeds] = useState([]);
  const [shopMeds, setShopMeds] = useState([]);

  useEffect(() => {
    const dist = JSON.parse(localStorage.getItem("distributorMedicines") || "[]");
    const shop = JSON.parse(localStorage.getItem("shopMedicines") || "[]");

    setDistMeds(dist);
    setShopMeds(shop);
  }, []);

  return (
    <div>
      <h2>Shopkeeper Dashboard</h2>

      <h3>Distributor Medicines</h3>
      {distMeds.length === 0 ? (
        <p>No medicines</p>
      ) : (
        distMeds.map((m) => <p key={m.id}>{m.name}</p>)
      )}

      <h3>My Stock</h3>
      {shopMeds.length === 0 ? (
        <p>No stock</p>
      ) : (
        shopMeds.map((m) => <p key={m.id}>{m.name}</p>)
      )}
    </div>
  );
};

export default Shopkeeper;