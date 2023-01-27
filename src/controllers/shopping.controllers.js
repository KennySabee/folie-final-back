const Shopping = require("./../models/shoppingSchema");
const { msgFormatoConst, respApi } = require("../helpers/helpers");

const getShopping = async (req, res) => {
  try {
    msgFormatoConst("getShopping");
    const Shop = await Shopping.find({});
    respApi(res, "Success", Shop);
  } catch {
    console.log("Error en la consulta");
  }
};

const createShopping = async (req, res) => {
  try{
    msgFormatoConst("createShopping");
    const ShoppingNew = await Shopping.create(req.body);  
    respApi(res, "Success", ShoppingNew);
  } catch{
    console.log("Error en la consulta");
  }
  
};

//tengo problemas aqui con el put 
const updateShopping = async (req, res) => {
  try{
    msgFormatoConst("updateShopping");
    const ShoppingUpdate = await Shopping.findByIdAndUpdate(req.params.id, req.body, {new:true});  
    respApi(res, "Success", ShoppingUpdate);
  } catch{
    console.log("Error en la consulta");
  }
 
};

const deleteShopping = async (req, res) => {
  try{
    msgFormatoConst("deleteShopping");
    const ShoppingDelete = await Shopping.findByIdAndDelete(req.params.id); 
    respApi(res, "Success", ShoppingDelete);

  } catch{
    console.log("Error en la consulta");
  }
  
};

module.exports = {
  getShopping,
  createShopping,
  deleteShopping,
  updateShopping,
};

