const { Router } = require("express");
const router = Router();
const authorization = require("./../middlewares/authorization");
const { getCustomers, createCustomer, loginCustomer,updateCustomers, verificarCustomers} = require ('../controllers/customers.controllers')


//localhost:5000/customers
router.get("/list", authorization, getCustomers);
// //localhost:5000/customers/crear
router.post("/create", createCustomer);
// //localhost:5000/customers/login
router.post("/login", loginCustomer);
// //localhost:5000/customers/verify/{id}
router.get("/verify",authorization, verificarCustomers);
// //localhost:5000/customers/update/{id}
router.put("/update",authorization, updateCustomers);

module.exports = router;
