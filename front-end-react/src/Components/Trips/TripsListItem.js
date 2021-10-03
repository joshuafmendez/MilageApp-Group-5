import { Link } from "react-router-dom";
import "../Style/Trips/TripsListItem.css";

const TripsListItem = ({ trip }) => {
  const {
    car_id,
    id,
    date,
    miles,
    reason,
    business_use,
    favorite,
  } = trip;

  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

  return (
    <tr className="tr-trips">
      <td>
        <Link to={`/cars/${car_id}/trips/${id}`}>
          <h2>{newDate.toLocaleDateString()}</h2>
        </Link>
      </td>
      <td>
        <p>{miles}</p>
      </td>
      <td>
        <p>{reason}</p>
      </td>
      <td>
        <p>{business_use ? "Yes" : "No"}</p>
      </td>
      <td>
        <p>{favorite ? "Yes" : "No"}</p>
      </td>
      <td>
        <p>
          <Link to={`/cars/${car_id}/trips/${id}/`}>
            <button>More</button>
          </Link>
        </p>
      </td>
    </tr>
  );
};

export default TripsListItem;
