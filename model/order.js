const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  products: { type: Array},
  amount: { type: Number},
  payment_method: { type: String },
  delivery_type: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("order", orderSchema);