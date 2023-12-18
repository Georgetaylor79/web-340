const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let appointmentSchema = new Schema({
  userName: { type: String, required: true, unique: false },
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: false },
  service: { type: String, required: true, unique: false },

})


// exporting our schema
module.exports = mongoose.model("Appointment", appointmentSchema);