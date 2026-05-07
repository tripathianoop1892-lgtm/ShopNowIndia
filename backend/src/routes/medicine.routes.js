import express from "express";
import {
  addMedicine,
  getMedicines,
  deleteMedicine,
  updateMedicine,
} from "../controllers/medicine.controller.js";

import { checkAuth, checkRole } from "../middlewares/auth.middleware.js";

const router = express.Router();

// =======================
// ➕ ADD MEDICINE
// =======================
router.post(
  "/",
  checkAuth,

  // 🔥 FIX
  checkRole("shopkeeper", "distributor"),

  addMedicine
);

// =======================
// 📄 GET MEDICINES
// =======================
router.get(
  "/medicine-list",
  checkAuth,
  getMedicines
);

// =======================
// ❌ DELETE
// =======================
router.delete(
  "/:id",
  checkAuth,

  // 🔥 FIX
  checkRole("shopkeeper", "distributor"),

  deleteMedicine
);

// =======================
// ✏️ UPDATE
// =======================
router.put(
  "/:id",
  checkAuth,

  // 🔥 FIX
  checkRole("shopkeeper", "distributor"),

  updateMedicine
);

export default router;