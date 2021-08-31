const db = require("../db/config");

const getAllGas = async () => {
  try {
    const query = "SELECT * FROM gas";
    const allGas = await db.any(query);
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

const addGas = async (gas) => {
  const { make, model, year, odometer, doors } = gas;
  try {
    const query =
      "INSERT INTO gas (make, model, year, odometer, doors) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const newGas = await db.one(query, [make, model, year, odometer, doors]);
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
  const { make, model, year, odometer, doors } = car;
  try {
    const query =
      "UPDATE gas SET make=$1, model=$2, year=$3, odometer=$4, doors=$5 WHERE id=$6 RETURNING *";
    const updatedGas = await db.one(query, [
      make,
      model,
      year,
      odometer,
      doors,
      id,
    ]);
    return { status: true, payload: updatedGas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = { getAllGas, getGas, addGas, deleteGas, updateGas };
