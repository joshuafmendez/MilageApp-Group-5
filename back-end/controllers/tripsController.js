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

// const pdfTripsController = require("./pdftripsController");
// trips.use("/trips/pdf", pdfTripsController);

trips.get("/", async (req, res) => {
  const { car_id } = req.params;
  const uid = req.query.uid;
  const allTrips = await getAllTrips(car_id, uid);
  res.json(allTrips);
});

trips.get("/:id", async (req, res) => {
  const { car_id, id } = req.params;
  const uid = req.query.uid;
  const trip = await getTrip(id, car_id, uid);
  res.json(trip);
});

trips.post("/", async (req, res) => {
  const { body, params } = req;
  const { car_id } = params;
  const uid = req.query.uid;
  const trip = await addTrip(body, car_id, uid);
  res.json(trip);
});

trips.delete("/:id", async (req, res) => {
  const uid = req.query.uid;
  const { id, car_id } = req.params;
  const trip = await deleteTrip(id, car_id, uid);
  res.json(trip);
});

trips.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  const trip = await updateTrip(id, body, uid);
  res.json(trip);
});

module.exports = trips;
