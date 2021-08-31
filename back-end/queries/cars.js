const db = require("../db/config");

const getAllCars = async () => {
  try {
    const query = "SELECT * FROM cars";
    const allCars = await db.any(query);
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
  const { make, model, year, odometer, doors } = car;
  try {
    const query =
      "INSERT INTO cars (make, model, year, odometer, doors) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const newCar = await db.one(query, [make, model, year, odometer, doors]);
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
  const { make, model, year, odometer, doors } = car;
  try {
    const query =
      "UPDATE cars SET make=$1, model=$2, year=$3, odometer=$4, doors=$5 WHERE id=$6 RETURNING *";
    const updatedCar = await db.one(query, [
      make,
      model,
      year,
      odometer,
      doors,
      id,
    ]);
    return { status: true, payload: updatedCar };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = { getAllCars, getCar, addCar, deleteCar, updateCar };
