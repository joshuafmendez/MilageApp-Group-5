const express = require("express");
const trips = express.Router({
  mergeParams: true,
});

const {
  getAllTrips,
  getTrip,
  addTrip,
  deleteTrip,
  updateTrip,
} = require("../queries/trips");

const pdfTripsController = require("./tripsController");
trips.use("/:car_id/trips/pdf", pdfTripsController);

trips.get("/", async (req, res) => {
  const allTrips = await getAllTrips(req.params.car_id);
  res.json(allTrips);
});

trips.get("/:id", async (req, res) => {
  const trip = await getTrip(req.params.id);
  res.json(trip);
});

trips.post("/", async (req, res) => {
  const { body, params } = req;
  const { car_id } = params;
  const trip = await addTrip(body, car_id);
  res.json(trip);
});

trips.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const trip = await deleteTrip(id);
  res.json(trip);
});

trips.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const trip = await updateTrip(id, body);
  res.json(trip);
});

module.exports = trips;
