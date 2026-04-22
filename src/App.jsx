import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ FORCE correct files (important 🔥)
import MedicineList from "./pages/medicine-list/MedicineList.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Shopkeeper from "./pages/dashboard/Shopkeeper.jsx";
import Distributor from "./pages/dashboard/Distributor.jsx";

import "./App.css";

const App = () => {
  // 🛒 Cart
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  // 📦 Orders
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  });

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save orders
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Customer */}
        <Route
          path="/"
          element={<MedicineList cart={cart} setCart={setCart} />}
        />

        <Route
          path="/medicines"
          element={<MedicineList cart={cart} setCart={setCart} />}
        />

        {/* ✅ Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              orders={orders}
              setOrders={setOrders}
            />
          }
        />

        {/* ✅ Shopkeeper */}
        <Route
          path="/shopkeeper"
          element={<Shopkeeper orders={orders} />}
        />

        {/* ✅ Distributor */}
        <Route path="/distributor" element={<Distributor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;