import { Link } from "react-router-dom";
import carImage from "../little_car.jpg";
import "../Style/ExpenseListItem.css"


function ExpenseListItem({ expense }) {
  const { id, car_id, expense_type, business_use, amount_spent, date } =
    expense;

  return (
    <tr className="row-penses">
      <td>
        <h2> {car_id}</h2>
      </td>
      <td className="date-data">
    <h2>
         {date}
      </h2> 
      </td>
      <td>
        <h2> {expense_type}</h2>
      </td>
      <td>
        <h2> ${amount_spent}</h2>
      </td>
      <td>
        <img src={business_use ? carImage : ""} alt="" />
      </td>
    </tr>
  );
}

export default ExpenseListItem;
