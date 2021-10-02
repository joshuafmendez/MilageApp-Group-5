import React from "react";
import { useEffect, useContext } from "react";
import ExpenseListItem from "./ExpenseListItem";
import { Link, useParams, useHistory } from "react-router-dom";
import { getAllExpensesFN } from "../../util/networkRequest";
import { useDispatch, useSelector } from "react-redux";
import { addExpenses } from "../../Store/Actions/expenseActions";
import { UserContext } from "../../Providers/UserProvider";
import "../Style/Expenses/Expenses.css";

const Expenses = () => {
  const entireState = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const { cars, expenses } = entireState;
  const expenseArr = Object.values(expenses);
  const { id } = useParams();
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchAllExpenses = async () => {
      try {
        if (user) {
          let res = await getAllExpensesFN(id, user);
          dispatch(addExpenses(res));
        }
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
    <div className="main-e-div">
      <h2>
        {cars[id]?.make} {cars[id]?.model} Expenses
      </h2>
      <Link to={`/cars/${id}/expenses/expense/new`}>
        <button className="expense-new-button">Add New Expense</button>
      </Link>
      <table className="expenses-main-table">
        <thead>
          <tr className="head-row">
            <th>Date</th>
            <th>Expense Type</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenseArr.map((expense, i) => {
            return <ExpenseListItem key={i} expense={expense} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
