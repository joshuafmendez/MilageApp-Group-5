const express = require("express");
const gas = express.Router({
  mergeParams: true,
});
const {
  getAllGas,
  getGas,
  addGas,
  deleteGas,
  updateGas,
} = require("../queries/gas");

gas.get("/", async (req, res) => {
  const allGas = await getAllGas();
  res.json(allGas);
});

gas.get("/:id", async (req, res) => {
  const gas = await getGas();
  res.json(gas);
});

gas.post("/", async (req, res) => {
  const { body, params } = req;
  const { car_id } = params;
  const gas = await addGas(body, car_id);
  res.json(gas);
});

gas.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const gas = await deleteGas(id);
  res.json(gas);
});

gas.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const gas = await updateGas(id, body);
  res.json(gas);
});

module.exports = gas;
