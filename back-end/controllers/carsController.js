const express = require("express");
const cars = express.Router();
const {
  getAllCars,
  getCar,
  addCar,
  deleteCar,
  updateCar,
} = require("../queries/cars");

const gasController = require("./gasController");
const tripsController = require("./tripsController");

cars.use("/:car_id/gas", gasController);
cars.use("/:car_id/trips", tripsController);

cars.get("/", async (req, res) => {
  const allCars = await getAllCars();
  res.json(allCars);
});

cars.get("/:id", async (req, res) => {
  const {id} =req.params
  const car = await getCar(id);
  res.json(car);
});

cars.post("/", async (req, res) => {
  const cars = await addCar(req.body);
  res.json(cars);
});

cars.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const car = await deleteCar(id);
  res.json(car);
});

cars.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const car = await updateCar(id, body);
  res.json(car);
});

module.exports = cars;
