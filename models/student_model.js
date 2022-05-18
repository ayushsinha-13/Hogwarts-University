const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Student_model = new Schema({
  uid: { type: Number },
  name: { type: String },
  dob: { type: String },
  course: { type: String },
  password: { type: String },
  gender: { type: String },
  bloodGroup: { type: String },
  admission_year: { type: Number },
  address: { type: String },
  email: { type: String },
  marks: { type: Map, to: Number },
  grades: { type: String },
  section: { type: String },
  cgpa: { type: Number },
  sgpa: { type: Array },
  phone: { type: Number },
  semester: { type: String },
});

const Student = mongoose.model("Student", Student_model);

module.exports = Student;
