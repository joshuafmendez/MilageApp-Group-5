import axios from "axios";
import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

// import'bootstrap-css-only/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
// import { MDBInput } from "mdbreact";
import "../Components/Style/CarNewForm.css";

import { UserContext } from "../Providers/UserProvider";

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
    uid: user.uid,
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
      {/* <form onSubmit={handleSubmit}>

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
          required
        />
        <label htmlFor="doors">Doors:</label>
        <input
          id="doors"
          type="number"
          value={doors}
          min="2"
          placeholder="Enter the number doors of the car"
          onChange={handleChange}
          required
        />
        <div>
          <button type="submit">Submit</button>
          <Link to={`/cars`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form> */}

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

// {
/* 
//   </div>
//   <div className="col-md-4">
//     <label for="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>...</option>
//     </select>
//   </div>
//   <div className="col-md-2">
//     <label for="inputZip" class="form-label">Zip</label>
//     <input type="text" class="form-control" id="inputZip">
//   </div>
//   <div class="col-12">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" id="gridCheck">
//       <label class="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <div class="col-12">
//     <button type="submit" class="btn btn-primary">Sign in</button>
//   </div>
// </form> */
// }
