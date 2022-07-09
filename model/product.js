const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  seller_id: { type: String },
  title: { type: String },
  description: { type: String },
  price: { type: String },
});

module.exports = mongoose.model("product", productSchema);