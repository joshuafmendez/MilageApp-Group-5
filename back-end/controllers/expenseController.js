const express = require("express");
const expenses = express.Router({
  mergeParams: true,
});
const {
  getAllExpenses,
  getExpense,
  addExpense,
  deleteExpense,
  updateExpense,
} = require("../queries/expenses");

expenses.get("/", async (req, res) => {
  const allExpenses = await getAllExpenses(req.params.car_id);
  res.json(allExpenses);
});

expenses.get("/:id", async (req, res) => {
  const expense = await getExpense(req.params.id);
  res.json(expense);
});

expenses.post("/", async (req, res) => {
  const { body, params } = req;
  const { car_id } = params;
  const expense = await addExpense(body, car_id);
  res.json(expense);
});

expenses.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const expense = await deleteExpense(id);
  res.json(expense);
});

expenses.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const expense = await updateExpense(id, body);
  res.json(expense);
});

module.exports = expenses;
