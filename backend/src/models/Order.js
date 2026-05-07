import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  medicineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Medicine",
  },

  name: String, // medicine name

  quantity: Number,

  price: Number,

  shopkeeperName: String, // 🔥 ye important hai (frontend me use ho raha hai)

  status: {
    type: String,
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);