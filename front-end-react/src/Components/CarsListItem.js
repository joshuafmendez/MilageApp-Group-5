import { Link } from "react-router-dom";

function CarsListItem({ car }) {
  const { id, make, model } = car;
  return (
    <tr>
      <td>
        <Link to={`/cars/${id}`}>
          <h2> {id}</h2>
        </Link>
      </td>
      <td>
        <Link to={`/cars/${id}`}>
          <h2>
            {" "}
            {make} {model}
          </h2>
        </Link>
      </td>
      {/* <td>
        <Link to={`/cars/${id}`}>
          <h2> {model}</h2>
        </Link>
      </td> */}
      <td>
        <h2> total mileage</h2>
      </td>
      <td>
        <h2> total expenses</h2>
      </td>
    </tr>
  );
}

export default CarsListItem;
