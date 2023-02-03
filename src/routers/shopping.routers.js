const { Router } = require("express");
const router = Router();
const { getShopping, createShopping, deleteShopping, updateShopping} = require ('../controllers/shopping.controllers')


//localhost:5000/Shopping
router.get("/list", getShopping);
// //localhost:5000/Shopping
router.post("/create", createShopping);
// //localhost:5000/Shopping/{id}
router.put("/update/:id", updateShopping);
// //localhost:5000/Shopping/{id}
router.delete("/delete/:id", deleteShopping);

module.exports = router;
