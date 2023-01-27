const mongoose = require("mongoose");
// ID NOMBRE EMAIL PASSWORD
const customerSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
},
{
		timestamps: true, // Permite agregar la fecha en el que fue generado el documento.
	}
);

const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;
