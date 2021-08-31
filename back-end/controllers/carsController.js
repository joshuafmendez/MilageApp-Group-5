const express = require("express");
const cars = express.Router();

const gasController = require("./gasController");
const tripsController = require("./tripsController");

cars.use("/:car_id/gas", gasController);
cars.use("/car_id/trips", tripsController);

module.exports = cars;
