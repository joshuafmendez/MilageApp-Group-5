import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function CarEditForm() {
  let { id } = useParams();
  let history = useHistory();

  const [car, setCar] = useState({
    make: "",
    model: "",
    vin: "",
    year: "",
    odometer: "",
    doors: "",
  });

  const updateCar = async (updatedCar) => {
    try {
      await axios.put(`${API}/cars/${id}`, updatedCar);
      history.push(`/cars/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`${API}/cars/${id}`);
        setCar(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCar(car, id);
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

export default CarEditForm;
