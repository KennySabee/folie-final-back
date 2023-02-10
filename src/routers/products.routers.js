const { Router } = require("express");
const router = Router();
const { getProducts, getSingleProduct, createProducts, deleteProduct, updateProducts} = require ('../controllers/products.controllers')


//localhost:5000/Shopping
router.get("/list", getProducts);

router.get('/list/:id', getSingleProduct);
// //localhost:5000/Shopping
router.post("/create", createProducts);
// //localhost:5000/Shopping/{id}
router.put("/update", updateProducts);
// //localhost:5000/Shopping/{id}
router.delete("/delete", deleteProduct);

module.exports = router;
