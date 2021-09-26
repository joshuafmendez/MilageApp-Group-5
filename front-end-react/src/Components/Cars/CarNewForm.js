import axios from "axios";
import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import "mdbreact/dist/css/mdb.css";
import "../../Components/Style/CarNewForm.css";

import { UserContext } from "../../Providers/UserProvider";

const API = apiURL();

function CarNewForm() {
  const user = useContext(UserContext);
  const [car, setCar] = useState({
    make: "",
    model: "",
    vin: "",
    year: "",
    odometer: "",
    doors: "",
    is_default: true,
    uid: user && user.uid,
  });

  let history = useHistory();

  const addCar = async (newCar) => {
    try {
      await axios.post(`${API}/cars`, newCar);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCar(car);
    history.push("/cars");
  };

  const { make, model, vin, year, odometer, doors } = car;

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-rows">
        <div className="all-rows">
          <div className="left-form">
            <div className="rowa">
              <label htmlFor="make">Make:</label>
              <input
                value={make}
                type="text"
                onChange={handleChange}
                id="make"
                placeholder="Enter make of the car"
                required
              />
            </div>
            <br></br>
            <div className="rowa">
              <label htmlFor="model">Model:</label>
              <input
                id="model"
                type="text"
                value={model}
                onChange={handleChange}
                placeholder="Enter model of the car"
                required
              />
            </div>
            <br></br>
            <div className="rowa">
              <label htmlFor="vin">Vin:</label>
              <input
                id="vin"
                type="text"
                value={vin}
                onChange={handleChange}
                placeholder="Enter vin of the car"
                required
              />{" "}
            </div>
          </div>

          <div className="right-form">
            <div className="rowb">
              <label htmlFor="year">year:</label>
              <input
                id="year"
                type="number"
                value={year}
                min="1900"
                onChange={handleChange}
                required
              />
            </div>

            <div className="rowb">
              <label htmlFor="odometer">Odometer:</label>
              <input
                id="odometer"
                type="number"
                value={odometer}
                min="0"
                placeholder="Enter the mileage on the odometer"
                onChange={handleChange}
                required
              />
            </div>

            <div className="rowb">
              <label htmlFor="doors">Doors:</label>
              <input
                id="doors"
                type="number"
                value={doors}
                min="2"
                placeholder="Enter the number doors of the car"
                onChange={handleChange}
                style={{ width: "50px" }}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
        <Link to={`/cars`}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default CarNewForm;
