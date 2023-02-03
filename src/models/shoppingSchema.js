const mongoose = require("mongoose");
// ID NOMBRE EMAIL PASSWORD
const shoppingSchema = mongoose.Schema({
  name: { type: String, require: true },
  brand: { type: Number, require: true },
  price: { type: Number, require: true },
  description: { type: String, require: true },
  img: { type: String, require: true }
});

const Shopping = mongoose.model("shopping", shoppingSchema);
module.exports = Shopping;
