const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// defines our schema object
const appointmentSchema = new Schema({
  // our object names, what type they are, unique and required for the DB
  // changed some of the name attributes unique to false to better add the data otherwise it comes up with an error, such as the original error was because of service, then i had to edit the mongoDB to reflect the changes otherwise it still held the boolean value as true and not false
  userName: { type: String, required: true, unique: false },
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: false },
  service: { type: String, required: true, unique: false },
});

// exporting our schema
module.exports = mongoose.model("Appointment", appointmentSchema);