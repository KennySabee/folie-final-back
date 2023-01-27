const mongoose = require("mongoose");
// ID NOMBRE EMAIL PASSWORD
const shoppingSchema = mongoose.Schema({
  name: { type: String, require: true },
  quantity: { type: Number, require: true },
  price: { type: Number, require: true },
});

const Shopping = mongoose.model("shopping", shoppingSchema);
module.exports = Shopping;
