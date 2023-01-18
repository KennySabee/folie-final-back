const { Router } = require("express");
const router = Router();
const { getShopping, createShopping, deleteShopping, updateShopping} = require ('../controllers/Shopping.controllers')


//localhost:5000/Shopping
router.get("/", getShopping);
// //localhost:5000/Shopping
router.post("/", createShopping);
// //localhost:5000/Shopping/{id}
router.put("/:id", updateShopping);
// //localhost:5000/Shopping/{id}
router.delete("/:id", deleteShopping);

module.exports = router;
