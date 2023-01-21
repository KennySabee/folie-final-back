const Customer = require("./../models/customerSchema");
const { msgFormatConst, respApi } = require("../helpers/helpers");


const getCustomers = async (req, res) => {
  const Custumers = await Customer.find({});
  // res.send("Estoy leyendo un usuario");
  // res.json(Custumers);
  msgFormatConst("getCostumers");
  respApi(res, 'Success',Custumers )
};

const createCustomer = async (req, res) => {
  const CustomerNew = await Customer.create(req.body);
  // res.send("Estoy creando un usuario");
  // res.json(CustomerNew);
  msgFormatConst("createCostumers");
  respApi(res, 'Success',CustomerNew )
};

const updateCustomers = (req, res) => {
  res.send("Estoy editando un usuario");
  msgFormatConst("updateCostumers");
};

const deleteCustomers = (req, res) => {
  res.send("Estoy eliminando un usuario");
  msgFormatConst("deleteCostumers");
};

module.exports = {
  getCustomers,
  createCustomer,
  deleteCustomers,
  updateCustomers,
};
