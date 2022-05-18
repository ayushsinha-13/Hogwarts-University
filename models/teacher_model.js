const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacher_model = new Schema({
  eid: { type: Number },
  name: { type: String },
  dob: { type: String },
  spelization: { type: String },
  password: { type: String },
  gender: { type: String },
  bloodGroup: { type: String },
  joiningyear: { type: Number },
  address: { type: String },
  email: { type: String },
  phone: { type: Number },
});

const teacher = mongoose.model("teacher", teacher_model);

module.exports = teacher;
