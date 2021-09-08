import axios from "axios";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function CarNewForm() {
  const [car, setCar] = useState({
    make: "",
    model: "",
    vin: "",
    year: "",
    odometer: "",
    doors: "",
  });

  let history = useHistory();

  const addCar = async (newCar) => {
    try {
      await axios.post(`${API}/cars`, newCar);
      history.push("/cars");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(car);
  };

  const { make, model, vin, year, odometer, doors } = car;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="make">Make:</label>
        <input
          value={make}
          type="text"
          onChange={handleChange}
          id="make"
          placeholder="Enter make of the car"
          required
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={model}
          onChange={handleChange}
          placeholder="Enter model of the car"
          required
        />
        <label htmlFor="vin">VIN:</label>
        <input
          id="vin"
          type="text"
          value={vin}
          onChange={handleChange}
          placeholder="Enter VIN of the car"
          required
        />
        <label htmlFor="year">year:</label>
        <input
          id="year"
          type="number"
          value={year}
          min="1900"
          onChange={handleChange}
          required
        />
        <label htmlFor="odometer">Odometer:</label>
        <input
          id="odometer"
          type="number"
          value={odometer}
          min="0"
          placeholder="Enter the mileage on the odometer"
          onChange={handleChange}
        />
        <label htmlFor="doors">Doors:</label>
        <input
          id="doors"
          type="number"
          value={doors}
          min="2"
          placeholder="Enter the number doors of the car"
          onChange={handleChange}
        />
        <div>
          <button type="submit">Submit</button>
          <Link to={`/cars`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CarNewForm;
