const Shopping = require("./../models/shoppingSchema");
const { msgFormatoConst, respApi } = require("../helpers/helpers");

const getShopping = async (req, res) => {
  try {
    msgFormatoConst("getShopping");
    const Shop = await Shopping.find({});
    respApi(res, "Success", Shop);
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
const createShopping = async (req, res) => {
  const { name, brand, price, description, img } = req.body
  try{
    msgFormatoConst("createShopping");
    const ShoppingNew = await Shopping.create({ name, brand, price, description, img });  
    respApi(res, "Success", ShoppingNew);
  } catch{
    console.log("Error creando producto en la consulta");
  }
  
};

//tengo problemas aqui con el put 
const updateShopping = async (req, res) => {
  const { id, name, brand, price, description, img } = req.body
  try{
    msgFormatoConst("updateShopping");
    const ShoppingUpdate = await Shopping.findByIdAndUpdate(id, { name, brand, price, description, img }, {new:true});  
    respApi(res, "Success", ShoppingUpdate);
  } catch{
    console.log("Error actualizando datos en consulta");
  }
 
};

const deleteShopping = async (req, res) => {
  try{
    msgFormatoConst("deleteShopping");
    const ShoppingDelete = await Shopping.findByIdAndDelete(req.params.id); 
    respApi(res, "Success", ShoppingDelete);

  } catch{
    console.log("Error eliminando producto en la consulta");
  }
  
};

module.exports = {
  getShopping,
  getSingleProduct,
  createShopping,
  deleteShopping,
  updateShopping,
};

