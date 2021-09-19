import axios from "axios";
import { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { apiURL } from "../../util/apiURL";

const API = apiURL();

function ExpenseNewForm() {
  const [expense, setExpense] = useState({
    expense_type: "",
    business_use: false,
    amount_spent: 0,
    date: "",
  });
  let history = useHistory();
  const { id } = useParams();

  const addExpense = async (newExpense) => {
    try {
      await axios.post(`${API}/cars/${id}/expenses`, newExpense);
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
    await addExpense(expense);
    history.push(`/cars/${id}/expenses`);
  };

  const { business_use, amount_spent, date } = expense;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          value={date}
          type="date"
          onChange={handleChange}
          id="date"
          placeholder="Enter date"
          required
        />
        Expense type
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
        </select>
        <label htmlFor="amount_spent">Amount</label>
        <input
          id="amount_spent"
          type="number"
          value={amount_spent}
          min="1"
          onChange={handleChange}
          required
        />
        <label htmlFor="business_use">Business Use</label>
        <input
          id="business_use"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={business_use}
        />
        <div>
          <button type="submit">Submit</button>
          <Link to={`/cars/${id}/expenses`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ExpenseNewForm;
