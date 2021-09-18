import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function ExpenseDetails() {
  let [expense, setExpense] = useState({});
  let { id, expense_id } = useParams();
  let history = useHistory();

  const deleteExpense = async () => {
    try {
      await axios.delete(`${API}/cars/${id}/expenses/${expense_id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    await deleteExpense();
    history.push(`/cars/${id}/expenses`);
  };

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        let res = await axios.get(`${API}/cars/${id}/expenses/${expense_id}`);
        setExpense(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExpense();
  }, [expense_id, id]);

  const { expense_type, business_use, amount_spent, date } = expense;

  return (
    <div>
      <h2>Car ID: {id}</h2>
      <h2>Date: {date}</h2>
      <h2>Expense Type: {expense_type}</h2>
      <h2>Amount: {amount_spent}</h2>
      <h2>Business Use: {business_use ? "Yes" : "No"}</h2>

      <div>
        <Link to={`/cars/${id}/expenses`}>
          <button>BACK</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
        <Link to={`/cars/${id}/expenses/${expense_id}/edit`}>
          <button>EDIT</button>
        </Link>
      </div>
    </div>
  );
}

export default ExpenseDetails;
