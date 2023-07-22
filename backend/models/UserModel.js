const mongoose = require("mongoose");

const currentCartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const CurrentCart = mongoose.model("PastOrders", currentCartSchema);

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  isVendor: {
    type: Boolean,
    default: false,
  },
  pastOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  currentCart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CurrentCart",
    },
  ],
  token: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
