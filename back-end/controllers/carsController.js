const express = require("express");
const cars = express.Router();
const {
  getAllCars,
  getCar,
  addCar,
  deleteCar,
  updateCar,
} = require("../queries/cars");

const expenseController = require("./expenseController");
const tripsController = require("./tripsController");

cars.use("/:car_id/expenses", expenseController);
cars.use("/:car_id/trips", tripsController);

cars.get("/", async (req, res) => {
  const uid = req.query.uid;
  const allCars = await getAllCars(uid);
  res.json(allCars);
});

cars.get("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  const car = await getCar(id, uid);
  res.json(car);
});

cars.post("/", async (req, res) => {
  const cars = await addCar(req.body);
  res.json(cars);
});

cars.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  const car = await deleteCar(id, uid);
  res.json(car);
});

cars.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  const car = await updateCar(id, body, uid);
  res.json(car);
});

module.exports = cars;
