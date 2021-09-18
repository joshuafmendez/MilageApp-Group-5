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

const getTrip = async (id) => {
  try {
    const query = "SELECT * FROM trips WHERE id=$1";
    const trip = await db.one(query, id);
    return { status: true, payload: trip };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addTrip = async (body, car_id) => {
  const {
    business_use,
    miles,
    date,
    reason,
    start_odometer,
    stop_odometer,
    favorite,
  } = body;
  try {
    const query =
      "INSERT INTO trips ( car_id,business_use,miles,date,reason,start_odometer,stop_odometer,favorite) VALUES ($1, $2, $3, $4,$5,$6,$7,$8) RETURNING *";
    const newTrip = await db.one(query, [
      car_id,
      business_use,
      miles,
      date,
      reason,
      start_odometer,
      stop_odometer,
      favorite,
    ]);
    return { status: true, payload: newTrip };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteTrip = async (id) => {
  try {
    const query = "DELETE FROM trips WHERE id=$1 RETURNING *";
    const deletedTrip = await db.one(query, id);
    return { status: true, payload: deletedTrip };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateTrip = async (id, body) => {
  const {
    car_id,
    business_use,
    miles,
    date,
    reason,
    start_odometer,
    stop_odometer,
    favorite,
  } = body;
  try {
    const query =
      "UPDATE trips SET car_id=$1, business_use=$2, miles=$3, date=$4,reason=$5,start_odometer=$6,stop_odometer=$7,favorite=$8 WHERE id=$9 RETURNING *";
    const updatedTrip = await db.one(query, [
      car_id,
      business_use,
      miles,
      date,
      reason,
      start_odometer,
      stop_odometer,
      favorite,
      id,
    ]);
    return { status: true, payload: updatedTrip };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = { getAllTrips, getTrip, addTrip, deleteTrip, updateTrip };
