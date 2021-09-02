const db = require("../db/config");

const getAllTrips = async (car_id) => {
  try {
    const query = "SELECT * FROM trips WHERE car_id=$1";
    const allTrips = await db.any(query, car_id);
    return { status: true, payload: allTrips };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const getTrips = async (id) => {
  //add car_id maybe. On second thought I dont think it is nessasary and I think Mashu said it wasn't nessasary
  try {
    const query = "SELECT * FROM trips WHERE id=$1";
    const trips = await db.one(query, id);
    return { status: true, payload: trips };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addTrip = async (trips) => {
  const { car_id, business_use, trips_spent, date } = trips;
  try {
    const query =
      "INSERT INTO trips (car_id,business_use, trips_spent, date) VALUES ($1, $2, $3, $4) RETURNING *";
    const newTrips = await db.one(query, [car_id, business_use, trips_spent, date]);
    return { status: true, payload: newTrips };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteTrip = async (id) => {
  try {
    const query = "DELETE FROM trips WHERE id=$1 RETURNING *";
    const deleteTrip = await db.one(query, id);
    return { status: true, payload: deleteTrip };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateTrip = async (id, car) => {
  const { car_id, business_use, trips_spent, date } = car;
  try {
    const query =
      "UPDATE trips SET car_id,=$1, business_use=$2, trips_spent=$3, date=$4 WHERE id=$5 RETURNING *";
    const updatedTrip = await db.one(query, [
      car_id,
      business_use,
      trips_spent,
      date,
      id,
    ]);
    return { status: true, payload: updatedTrip };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = { getAllTrips, getTrips, addTrip, deleteTrip, updateTrip };
