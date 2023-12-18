
const mongoose = require("mongoose");
cost Schema = mongoose.Schema;

let customerSchema = new Schema({
    customerId: { type: Number, unique: true, required: true },
    email: { type: String, unique: true, required: true}
})

module.export = mongoose.model('Customer, customerSchema');

