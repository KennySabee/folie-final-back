const {msgFormatConst} = require('../helpers/helpers')

const getShopping = (req, res) => {
  res.send("Estoy leyendo una compra");
  msgFormatConst('getShopping');
};

const createShopping = (req, res) => {
  res.send("Estoy creando una compra");
  msgFormatConst('createShopping');
};

const updateShopping = (req, res) => {
  res.send("Estoy editando una compra");
  msgFormatConst('updateShopping');
};

const deleteShopping = (req, res) => {
  res.send("Estoy eliminando una compra");
  msgFormatConst('deleteShopping');
};

module.exports = {
  getShopping,
  createShopping,
  deleteShopping,
  updateShopping
};
