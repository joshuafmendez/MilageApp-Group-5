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
    driver: "",
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

  const { driver, make, model, vin, year, odometer, doors } = car;

  return (
    // <div>
    //   <form onSubmit={handleSubmit} className="form-rows">
    //     <div className="all-rows">
    //       <div className="left-form">
    //         <div className="rowa">
    //           <label htmlFor="make">Make:</label>
    //           <input
    //             value={make}
    //             type="text"
    //             onChange={handleChange}
    //             id="make"
    //             placeholder="Enter make of the car"
    //             required
    //           />
    //         </div>
    //         <br></br>
    //         <div className="rowa">
    //           <label htmlFor="model">Model:</label>
    //           <input
    //             id="model"
    //             type="text"
    //             value={model}
    //             onChange={handleChange}
    //             placeholder="Enter model of the car"
    //             required
    //           />
    //         </div>
    //         <br></br>
    //         <div className="rowa">
    //           <label htmlFor="vin">Vin:</label>
    //           <input
    //             id="vin"
    //             type="text"
    //             value={vin}
    //             onChange={handleChange}
    //             placeholder="Enter vin of the car"
    //             required
    //           />{" "}
    //         </div>
    //       </div>

    //       <div className="right-form">
    //         <div className="rowb">
    //           <label htmlFor="year">year:</label>
    //           <input
    //             id="year"
    //             type="number"
    //             value={year}
    //             min="1900"
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>


    //         <div className="rowb">
    //           <label htmlFor="odometer">Odometer:</label>
    //           <input
    //             id="odometer"
    //             type="number"
    //             value={odometer}
    //             min="0"
    //             placeholder="Enter the mileage on the odometer"
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>

    //         <div className="rowb">
    //           <label htmlFor="doors">Doors:</label>
    //           <input
    //             id="doors"
    //             type="number"
    //             value={doors}
    //             min="2"
    //             placeholder="Enter the number doors of the car"
    //             onChange={handleChange}
    //             style={{ width: "50px" }}
    //             required
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <button type="submit">Submit</button>
    //     <Link to={`/cars`}>
    //       <button>Cancel</button>
    //     </Link>
    //   </form>
    // </div>

    <div className="bckground">
      <div className="divform">
        <form onSubmit={handleSubmit} className="form-newcar">
          <div className="all-rows">
            <div className="left-form">
              <div className="rowa">
                <label htmlFor="driver">Driver's Name</label>
                <input
                  value={driver}
                  type="text"
                  onChange={handleChange}
                  id="driver"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="rowa">
                <table className="table-newcar">
                  <tr className="row-make">
                    <td className="label-data">
                      {" "}
                      <label htmlFor="make">Make:</label>
                    </td>

                    <td className="make-input">
                      {/* {" "} */}
                      <input
                        value={make}
                        type="text"
                        onChange={handleChange}
                        id="make"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  {/* <br></br> */}
                  <tr className="row-model">
                    <td className="model-data">
                      <label className="label-data" htmlFor="model">
                        Model:
                      </label>
                    </td>

                    <td>
                      <input
                        id="model"
                        className="model-input"
                        type="text"
                        value={model}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>

                  <tr className="row-vin">
                    <td>
                      <label className="label-data" htmlFor="vin">
                        Vin:
                      </label>
                    </td>

                    <td>
                      {/* </div> */}
                      {/* <br></br> */}
                      {/* <div className="rowa"> */}
                      {/* <label htmlFor="vin">VIN:</label> */}

                      <input
                        id="vin"
                        className="vin-input"
                        type="text"
                        value={vin}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                      {/* {" "} */}
                    </td>
                  </tr>

                  <tr className="row-year">
                    <td>
                      <label className="label-data" htmlFor="year">
                        year:
                      </label>
                    </td>

                    <td className="input-year">
                      {/* // <div className="right-form"> */}
                      {/* //   <div className="rowb"> */}
                      {/* //       <label htmlFor="year">Year:</label> */}

                      <input
                        id="year"
                        type="number"
                        value={year}
                        min="1990"
                        onChange={handleChange}
                        // required
                      />
                    </td>
                  </tr>

                  <tr className="row-odo">
                    <td className="data-odo">
                      <label className="label-data" htmlFor="odometer">
                        Odometer:
                      </label>
                    </td>

                    <td className="input-odo">
                      <input
                        id="odometer"
                        type="number"
                        value={odometer}
                        min="0"
                        placeholder=""
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>

                  <tr className="row-doors">
                    <td>
                      <label className="label-data" htmlFor="doors">
                        Doors:
                      </label>
                    </td>
                    <td className="input-doors">
                      <input
                        id="doors"
                        type="number"
                        value={doors}
                        min="2"
                        max="4"
                        placeholder="Enter the number doors of the car"
                        onChange={handleChange}
                        style={{ width: "50px" }}
                        required
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="buts">
              <Link to={`/cars`}>
                <button onClick={handleSubmit} className="submit" type="submit">
                  Submit
                </button>
              </Link>

              <Link to={`/cars`}>
                <button className="cancel">Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarNewForm;
