import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { UserContext } from "../Providers/UserProvider";
import { useSelector, useDispatch } from "react-redux";
import { selectCar } from "../Store/Actions/carsActions";

const API = apiURL();

function ExpenseDetails() {
  const entireState = useSelector((state) => state);
  const { selectedCar } = entireState;
  // console.log("selectedCar in ExpenseDetails",selectedCar[0].uid)
  const user = useContext(UserContext);
  let [expense, setExpense] = useState({});
  let { id, expense_id } = useParams();
  let history = useHistory();

  const deleteExpense = async () => {
    try {
      await axios.delete(`${API}/cars/${id}/expenses/${expense_id}?uid=${user.uid}`);
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
      // if (selectedCar[0].uid === user.uid) {
      try {
        let res = await axios.get(`${API}/cars/${id}/expenses/${expense_id}?uid=${user.uid}`);
        setExpense(res.data.payload);
      } catch (err) {
        console.log(err);
      }
      // } else {
      //   history.push("/")
      // }
    };
    fetchExpense();
  }, [expense_id, id,user]);

  const { expense_type, business_use, amount_spent, date } = expense;
  if (!user) {
    return <div className="spinner-border"></div>
  } else {
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
}

export default ExpenseDetails;
