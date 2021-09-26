import React from "react";
import { useEffect, useContext } from "react";
import ExpenseListItem from "./ExpenseListItem";
import { Link, useParams, useHistory } from "react-router-dom";
import { fetchAllExpensesFN } from "../../util/networkRequest";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses } from "../../Store/Actions/expenseActions";
import { UserContext } from "../../Providers/UserProvider";
import "../../App.css";

const Expenses = () => {
  const entireState = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const { expenses } = entireState;
  const expenseArr = Object.values(expenses);
  const { id } = useParams();
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchAllExpenses = async () => {
      try {
        let res = await fetchAllExpensesFN(id, user);
        dispatch(addExpenses(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllExpenses();
  }, [dispatch, id, user]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div>
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
          {expenseArr.map((expense, i) => {
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
