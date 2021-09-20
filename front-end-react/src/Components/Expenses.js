import React from "react";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { apiURL } from "../util/apiURL";
import ExpenseListItem from "./ExpenseListItem";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import("../App.css");

const API = apiURL();

const Expenses = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  const [expenses, setExpenses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAllExpenses = async () => {
      try {
        let res = await axios.get(`${API}/cars/${id}/expenses`);
        setExpenses(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllExpenses();
  }, [id]);

  // const handleChange = (type) => {
  //   const sortedCars = [...expenses];
  //   const sortTypes = {
  //     expense_type: "expense_type",
  //     date: "date",
  //     amount_spent: "amount_spent",
  //   };

  //   const sortProperty = sortTypes[type];

  //   const sorted = sortedCars.sort((a, b) => {
  //     if (sortProperty === "expense_type" || sortProperty === "date") {
  //       return a[sortProperty].localeCompare(b[sortProperty]);
  //     } else if (sortProperty === "amount_spent") {
  //       return a[sortProperty] - b[sortProperty];
  //     } else {
  //       return null;
  //     }
  //   });
  //   setExpenses(sorted);
  // };

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div>
      {/* <div className="sorting">
        Sort by
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="" defaultValue></option>
          <option name="date" value="date">
            date
          </option>
          <option name="expense_type" value="expense_type">
            expense type
          </option>
          <option name="amount_spent" value="amount_spent">
            amount
          </option>
        </select>
      </div> */}
      <table>
        <thead>
          <tr>
            <th>
              <h2>Car ID</h2>
            </th>
            <th>
              <h2>Date</h2>
            </th>
            <th>
              <h2>Expense Type</h2>
            </th>
            <th>
              <h2>Amount</h2>
            </th>
            <th>
              <h2>Business Use?</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, i) => {
            return <ExpenseListItem key={i} expense={expense} />;
          })}
        </tbody>
      </table>
      <Link to={`/cars/${id}/expenses/expense/new`}>
        <button className="expense-new-button">Add New Expense</button>
      </Link>
    </div>
  );
};

export default Expenses;
