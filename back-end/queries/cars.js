const db = require("../db/config");

const getAllCars = async (uid) => {
  try {
    const query = "SELECT * FROM cars WHERE uid=$1";
    const allCars = await db.any(query, uid);
    return { status: true, payload: allCars };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const getCar = async (id) => {
  try {
    const query = "SELECT * FROM cars WHERE id=$1";
    const car = await db.one(query, id);
    return { status: true, payload: car };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addCar = async (car) => {
  const { make, model, vin, year, odometer, doors, uid } = car;
  try {
    const query =
      "INSERT INTO cars (make, model, vin, year, odometer, doors,uid) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *";
    const newCar = await db.one(query, [
      make,
      model,
      vin,
      year,
      odometer,
      doors,
      uid,
    ]);
    return { status: true, payload: newCar };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteCar = async (id) => {
  try {
    const query = "DELETE FROM cars WHERE id=$1 RETURNING *";
    const deletedCar = await db.one(query, id);
    return { status: true, payload: deletedCar };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateCar = async (id, car) => {
  const { make, model, vin, year, odometer, doors, uid } = car;
  try {
    const query =
      "UPDATE cars SET make=$1, model=$2, vin=$3, year=$4, odometer=$5, doors=$6, uid=$7 WHERE id=$8 RETURNING *";
    const updatedCar = await db.one(query, [
      make,
      model,
      vin,
      year,
      odometer,
      doors,
      uid,
      id,
    ]);
    return { status: true, payload: updatedCar };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = { getAllCars, getCar, addCar, deleteCar, updateCar };
