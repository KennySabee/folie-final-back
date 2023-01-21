const mongoose = require("mongoose");
// ID NOMBRE EMAIL PASSWORD
const customerSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
