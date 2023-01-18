const {msgFormatConst} = require('../helpers/helpers')

const getCustomers = (req, res) => {
  res.send("Estoy leyendo un usuario");
  msgFormatConst('getCostumers');
};

const createCustomers = (req, res) => {
  res.send("Estoy creando un usuario");
  msgFormatConst('createCostumers');
};

const updateCustomers = (req, res) => {
  res.send("Estoy editando un usuario");
  msgFormatConst('updateCostumers');
};

const deleteCustomers = (req, res) => {
  res.send("Estoy eliminando un usuario");
  msgFormatConst('deleteCostumers');
};

module.exports = {
  getCustomers,
  createCustomers,
  deleteCustomers,
  updateCustomers
};
