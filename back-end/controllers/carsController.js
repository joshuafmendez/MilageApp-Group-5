const express = require("express");
const cars = express.Router();

const gasController = require("./gasController");
const tripsController = require("./tripsController");

app.use("/:car_id/gas", gasController);
app.use("/car_id/trips", tripsController);

module.exports = cars;
