import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { UserContext } from "../../Providers/UserProvider";

const API = apiURL();

const ExpenseDetails = () => {
  const user = useContext(UserContext);
  let [expense, setExpense] = useState({});
  let { id, expense_id } = useParams();
  let history = useHistory();

  const deleteExpense = async () => {
    try {
      if (user) {
        await axios.delete(
          `${API}/cars/${id}/expenses/${expense_id}?uid=${user.uid}`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteExpense();
      history.push(`/cars/${id}/expenses`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        if (user) {
          let res = await axios.get(
            `${API}/cars/${id}/expenses/${expense_id}?uid=${user.uid}`
          );
          setExpense(res.data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchExpense();
  }, [expense_id, id, user]);
  
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  const { expense_type, business_use, amount_spent, date } = expense;
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

  if (!user) {
    return <div className="spinner-border"></div>;
  } else {
    return (
      <div>
        {/* Change to make and model */}
          <Link to={`/cars/${id}/expenses`}>
            <button>BACK</button>
          </Link>
        <p>Car ID: {id}</p>
        <p>
          Date:
          {newDate.toLocaleDateString()}
        </p>
        <p>Expense Type: {expense_type}</p>
        <p>Amount: ${amount_spent}</p>
        <p>Business Use: {business_use ? "Yes" : "No"}</p>
        <div>
          <button onClick={handleDelete}>DELETE</button>
          <Link to={`/cars/${id}/expenses/${expense_id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ExpenseDetails;
