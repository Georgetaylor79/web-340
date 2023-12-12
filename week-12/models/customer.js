
const mongoose = require("mongoose");
cost Schema = mongoose.Schema;

const customerSchema = New Schema({

    customerId: { type: String, required: true, unique: true},
    email: { type: String, required; true, unique; true};
})

