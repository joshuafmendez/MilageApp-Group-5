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
  const { car_id } = req.params;
  const  uid  = req.query.uid;
  const allExpenses = await getAllExpenses(car_id,uid);
  res.json(allExpenses);
});

expenses.get("/:id", async (req, res) => {
  const { car_id,id } = req.params;
  const  uid  = req.query.uid;
  const expense = await getExpense(id,car_id,uid);
  res.json(expense);
});

expenses.post("/", async (req, res) => {
  const { body, params } = req;
  const { car_id } = params;
  const  uid  = req.query.uid;
  const expense = await addExpense(body, car_id,uid);
  res.json(expense);
});

expenses.delete("/:id", async (req, res) => {
  const  uid  = req.query.uid;
  const { id,car_id } = req.params;
  const expense = await deleteExpense(id,car_id,uid);
  res.json(expense);
});

expenses.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const  uid  = req.query.uid;
  const expense = await updateExpense(id, body,uid);
  res.json(expense);
});

module.exports = expenses;
