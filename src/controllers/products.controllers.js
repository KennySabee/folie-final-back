const Product = require("../models/productSchema");
const { msgFormatoConst, respApi } = require("../helpers/helpers");

const getProducts = async (req, res) => {
  try {
    msgFormatoConst("getProduct");
    const Products = await Product.find({});
    respApi(res, "Success", Products);
  } catch {
    console.log("Error obteniendo productos en la consulta");
  }
};
const getSingleProduct = async (req,res)=>{
  try {
      const singleProduct = await Product.findById(req.params.id)
      msgFormatoConst('getSingleProducts');
      res.json({singleProduct})
  } catch (error) {
      res.status(500).json({ msg: 'Hubo un error obteniendo los datos' })
  }
}
const createProducts = async (req, res) => {
  const { name, brand, price, description, img } = req.body
  try{
    msgFormatoConst("createProducts");
    const newProduct = await Product.create({ name, brand, price, description, img });  
    respApi(res, "Success", newProduct);
  } catch{
    console.log("Error creando producto en la consulta");
  }
  
};

//tengo problemas aqui con el put 
const updateProducts = async (req, res) => {
  const { id, name, brand, price, description, img } = req.body
  try{
    msgFormatoConst("updateProducts");
    const putProduct = await Product.findByIdAndUpdate(id, { name, brand, price, description, img }, {new:true});  
    respApi(res, "Success", putProduct);
  } catch{
    console.log("Error actualizando datos en consulta");
  }
 
};

const deleteProduct = async (req, res) => {
  try{
    msgFormatoConst("deleteProduct");
    const ProductDelete = await Product.findByIdAndDelete(req.params.id); 
    respApi(res, "Success", ProductDelete);

  } catch{
    console.log("Error eliminando producto en la consulta");
  }
  
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProducts,
  deleteProduct,
  updateProducts
};

