import Order from "../models/Order.js";
import Medicine from "../models/medicine.js";

// =======================
// 📦 CREATE ORDER
// =======================
export const createOrder = async (req, res) => {
  try {
    const { medicineId, quantity, price, shopkeeperName } = req.body;

    // 🔍 Medicine check
    const med = await Medicine.findById(medicineId);

    if (!med) {
      return res.json({
        success: false,
        message: "Medicine not found ❌",
      });
    }

    // ❌ Quantity validation
    if (!quantity || quantity <= 0) {
      return res.json({
        success: false,
        message: "Invalid quantity ❌",
      });
    }

    // ❌ Low stock check
    if (med.stock < quantity) {
      return res.json({
        success: false,
        message: "Low stock ❌",
      });
    }

    // ✅ Stock reduce (SAFE)
    med.stock = med.stock - quantity;
    await med.save();

    // 🔥 USER FROM TOKEN
    const user = req.user;

    // ✅ Order create
    const order = await Order.create({
      medicineId,
      name: med.name,
      quantity,
      price: price || med.price || 0, // 🔥 fallback fix
      shopkeeperName,
      customerName: user?.name || "Customer",
      status: "pending", // 🔥 ensure default
    });

    return res.json({
      success: true,
      message: "Order placed ✅",
      data: order,
    });

  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);

    return res.json({
      success: false,
      message: "Error ❌",
    });
  }
};

// =======================
// 📄 GET ALL ORDERS
// =======================
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    return res.json(orders);
  } catch (err) {
    console.log("GET ORDERS ERROR:", err);

    return res.json({
      success: false,
      message: "Error ❌",
    });
  }
};

// =======================
// 🔄 UPDATE STATUS
// =======================
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.json({
        success: false,
        message: "Order not found ❌",
      });
    }

    return res.json({
      success: true,
      message: "Updated ✅",
      data: order,
    });

  } catch (err) {
    console.log("UPDATE ERROR:", err);

    return res.json({
      success: false,
      message: "Error ❌",
    });
  }
};