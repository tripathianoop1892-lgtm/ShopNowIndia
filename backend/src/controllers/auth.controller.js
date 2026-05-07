import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

// 🔐 TOKEN GENERATE
const generateToken = (user) => {

  return jwt.sign(
    {
      _id: user._id, // 🔥 FINAL FIX
      role: user.role,
      name: user.name,
      shopId: user.shopId || null,
    },

    process.env.JWT_SECRET,

    {
      expiresIn: "1d",
    }
  );
};

// =======================
// REGISTER
// =======================
export const registerUser = async (req, res) => {

  try {

    const {
      email,
      password,
      role,
      name,
    } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res.json({
        success: false,
        message: "User already exists ❌",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    let newShopId = null;

    // 🏪 SHOPKEEPER
    if (role === "shopkeeper") {
      newShopId =
        "SHOP-" + uuidv4().slice(0, 6);
    }

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      name,
      shopId: newShopId,
    });

    return res.json({
      success: true,
      message: "Registered Successfully ✅",
      shopId: user.shopId,
    });

  } catch (err) {

    console.log("REGISTER ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server error ❌",
    });
  }
};

// =======================
// LOGIN
// =======================
export const loginUser = async (req, res) => {

  try {

    const {
      email,
      password,
      shopId,
    } = req.body;

    const user = await User.findOne({ email });

    // ❌ USER NOT FOUND
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid Email ❌",
      });
    }

    // 🔐 PASSWORD CHECK
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Wrong Password ❌",
      });
    }

    // 🔥 CUSTOMER ONLY
    if (user.role === "customer") {

      if (!shopId) {
        return res.json({
          success: false,
          message: "Shop ID required ❌",
        });
      }

      if (user.shopId !== shopId) {
        return res.json({
          success: false,
          message: "Wrong Shop ID ❌",
        });
      }
    }

    // 🔥 TOKEN
    const token = generateToken(user);

    return res.json({
      success: true,
      token,
      user,
    });

  } catch (err) {

    console.log("LOGIN ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server error ❌",
    });
  }
};

// =======================
// FORGOT PASSWORD
// =======================
export const forgotPassword = async (req, res) => {

  try {

    const {
      email,
      newPassword,
    } = req.body;

    if (!email || !newPassword) {
      return res.json({
        success: false,
        message:
          "Email & New Password required ❌",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found ❌",
      });
    }

    const hashedPassword =
      await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    return res.json({
      success: true,
      message:
        "Password updated successfully ✅",
    });

  } catch (err) {

    console.log("FORGOT ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server error ❌",
    });
  }
};