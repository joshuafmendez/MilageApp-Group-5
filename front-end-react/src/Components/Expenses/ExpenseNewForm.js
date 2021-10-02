import axios from "axios";
import { useState, useContext, useEffect } from "react";
import "../Style/ExpenseNewForm.css";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import { UserContext } from "../../Providers/UserProvider";

const API = apiURL();
function ExpenseNewForm() {
  const user = useContext(UserContext);
  const history = useHistory();
  const [expense, setExpense] = useState({
    expense_type: "",
    business_use: false,
    amount_spent: 0,
    date: new Date(),
  });
  const { id } = useParams();

  const addExpense = async (newExpense) => {
    try {
      await axios.post(
        `${API}/cars/${id}/expenses?uid=${user.uid}`,
        newExpense
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.id]: e.target.value });
  };
  const handleSelectChange = (e) => {
    setExpense({ ...expense, expense_type: e.target.value });
  };

  const handleCheckboxChange = () => {
    setExpense({ ...expense, business_use: !expense.business_use });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExpense(expense);
      history.push(`/cars/${id}/expenses`);
    } catch (error) {
      console.log(error);
    }
  };

  const { business_use, amount_spent, date } = expense;

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="div-form">
      <div>
        <form onSubmit={handleSubmit}>
          Car Expenses
          <table>
            <tr>
              {" "}
              <td>
                <label htmlFor="date">Date:</label>
              </td>
              <td>
                <input
                  value={date}
                  type="date"
                  onChange={handleChange}
                  id="date"
                  placeholder="Enter date"
                  // required
                />{" "}
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                <label> Expense type:</label>
              </td>
              <td>
                <select onChange={handleSelectChange}>
                  <option value="" defaultValue></option>
                  <option name="gas" value="Gas">
                    Gas
                  </option>
                  <option name="repairs" value="Repairs">
                    Repairs
                  </option>
                  <option name="car_insurance" value="Car Insurance">
                    Car Insurance
                  </option>
                  <option name="oil_change" value="Oil Change">
                    Oil Change
                  </option>
                  <option name="registration_fees" value="Registration Fees">
                    Registration Fees
                  </option>
                  <option name="depreciation" value="Depreciation">
                    Depreciation
                  </option>
                  <option name="rent" value="Car Rental">
                    Car Rental
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              {" "}
              <td>
                <label htmlFor="amount_spent">Amount:</label>
              </td>
              <td>
                <input
                  id="amount_spent"
                  type="number"
                  value={amount_spent}
                  min="1"
                  onChange={handleChange}
                  required
                />{" "}
              </td>
            </tr>

            <tr>
              {" "}
              <td>
                <label htmlFor="business_use">Business Use:</label>
              </td>
              <td>
                <input
                  id="business_use"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={business_use}
                />
              </td>
            </tr>
          </table>
          <div>
            <button className="button-sub" type="submit">
              Submit
            </button>
            <button onClick={() => history.goBack()} className="button-can">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseNewForm;
