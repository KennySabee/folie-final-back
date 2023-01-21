const { Router } = require("express");
const router = Router();
const { getCustomers, createCustomer, deleteCustomers, updateCustomers} = require ('../controllers/customers.controllers')


//localhost:5000/customers
router.get("/", getCustomers);
// //localhost:5000/customers
router.post("/", createCustomer);
// //localhost:5000/customers/{id}
router.put("/:id", updateCustomers);
// //localhost:5000/customers/{id}
router.delete("/:id", deleteCustomers);

module.exports = router;
