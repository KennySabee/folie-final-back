const { Router } = require("express");
const router = Router();
const { getShopping, getSingleProduct, createShopping, deleteShopping, updateShopping} = require ('../controllers/shopping.controllers')


//localhost:5000/Shopping
router.get("/list", getShopping);

router.get('/list/:id', getSingleProduct);
// //localhost:5000/Shopping
router.post("/create", createShopping);
// //localhost:5000/Shopping/{id}
router.put("/update", updateShopping);
// //localhost:5000/Shopping/{id}
router.delete("/delete", deleteShopping);

module.exports = router;
