const db = require("../db/config");

const getAllExpenses = async (car_id) => {
  try {
    const query = "SELECT * FROM expenses WHERE car_id=$1";
    const allExpenses = await db.any(query, car_id);
    return { status: true, payload: allExpenses };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const getExpense = async (id) => {
  try {
    const query = "SELECT * FROM expenses WHERE id=$1";
    const expense = await db.one(query, id);
    return { status: true, payload: expense };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const addExpense = async (body, car_id) => {
  const { expense_type, business_use, amount_spent, date } = body;
  try {
    const query =
      "INSERT INTO expenses (car_id, expense_type, business_use, amount_spent, date) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const newExpense = await db.one(query, [
      car_id,
      expense_type,
      business_use,
      amount_spent,
      date,
    ]);
    return { status: true, payload: newExpense };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const deleteExpense = async (id) => {
  try {
    const query = "DELETE FROM expenses WHERE id=$1 RETURNING *";
    const deletedExpense = await db.one(query, id);
    return { status: true, payload: deletedExpense };
  } catch (error) {
    return { status: false, payload: error };
  }
};

const updateExpense = async (id, car) => {
  const { car_id, expense_type, business_use, amount_spent, date } = car;
  try {
    const query =
      "UPDATE expenses SET car_id=$1, expense_type=$2, business_use=$3, amount_spent=$4, date=$5 WHERE id=$6 RETURNING *";
    const updatedExpense = await db.one(query, [
      car_id,
      expense_type,
      business_use,
      amount_spent,
      date,
      id,
    ]);
    return { status: true, payload: updatedExpense };
  } catch (error) {
    return { status: false, payload: error };
  }
};

module.exports = {
  getAllExpenses,
  getExpense,
  addExpense,
  deleteExpense,
  updateExpense,
};
