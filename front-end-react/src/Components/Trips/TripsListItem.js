import { Link } from "react-router-dom";
import "../Style/TripsListItem.css"
import expenses from '../../Store/Reducers/expenses';


const TripsListItem = ({ trip }) => {
  const {
    car_id,
    id,
    date,
    miles,
    reason,
    start_odometer,
    stop_odometer,
    business_use,
    favorite,
  } = trip;

  let newDate = new Date(date);
  return (
<div className="table-for-trips">
    <tr className="tr-trips">
      
      <td>
        <Link to={`/cars/${car_id}/trips/${id}`}>
          <h2>{newDate.toLocaleDateString()}</h2>
        </Link>
      </td>
      <td>
        <h2>{miles}</h2>
      </td>
      <td>
        <h2>{reason}</h2>
      </td>
      <td>
        <h2>{start_odometer}</h2>
      </td>
      <td>
        <h2>{stop_odometer}</h2>
      </td>
      <td>
        <h2>{business_use ? "Yes" : "No"}</h2>
      </td>
      <td>
        <h2>{favorite ? "Yes" : "No"}</h2>
      </td>
      <td>
        <h2>
          <Link to={`/cars/${car_id}/trips/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </h2>
      </td>
    </tr>
    </div>
  );
};

export default TripsListItem;
