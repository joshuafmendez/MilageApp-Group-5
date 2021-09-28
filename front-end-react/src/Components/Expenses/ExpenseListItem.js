import { Link } from "react-router-dom";
import carImage from "../little_car.jpg";

function ExpenseListItem({ expense }) {
  const { id, car_id, expense_type, business_use, amount_spent, date } =
    expense;

  let newDate = new Date(date);
  return (
    <tr>
      <td>
        <h2> {car_id}</h2>
      </td>
      <td>
        <Link to={`/cars/${car_id}/expenses/${id}`}>
          <h2> {newDate.toLocaleDateString()}</h2>
        </Link>
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
