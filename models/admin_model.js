const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const admin_model = new Schema({
  a_id: { type: Number },
  password: { type: String },
});

const admin = mongoose.model("admin", admin_model);

module.exports = admin;
