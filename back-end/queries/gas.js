const db = require("../db/config");

const getAllGas = async (car_id) => {
  try {
    const query = "SELECT * FROM gas WHERE car_id=$1";
    const allGas = await db.any(query, car_id);
    return { status: true, payload: allGas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const getGas = async (id) => {
   try {
    const query = "SELECT * FROM gas WHERE id=$1";
    const gas = await db.one(query, id);
    return { status: true, payload: gas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addGas = async (body, car_id) => {
  const { business_use, gas_spent, date } = body;
  try {

    const query =
      "INSERT INTO gas (car_id,business_use, gas_spent, date) VALUES ($1, $2, $3, $4) RETURNING *";
    const newGas = await db.one(query, [car_id, business_use, gas_spent, date]);
    return { status: true, payload: newGas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteGas = async (id) => {
  try {
    const query = "DELETE FROM gas WHERE id=$1 RETURNING *";
    const deletedGas = await db.one(query, id);
    return { status: true, payload: deletedGas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateGas = async (id, car) => {
  const { car_id, business_use, gas_spent, date } = car;
  try {
    const query =

      "UPDATE gas SET car_id=$1, business_use=$2, gas_spent=$3, date=$4 WHERE id=$5 RETURNING *";
    const updatedGas = await db.one(query, [
      car_id,
      business_use,
      gas_spent,
      date,
      id,
    ]);
    return { status: true, payload: updatedGas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = { getAllGas, getGas, addGas, deleteGas, updateGas };
