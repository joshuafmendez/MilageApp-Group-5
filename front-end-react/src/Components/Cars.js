import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import CarsListItem from "./CarsListItem";
import { Link } from "react-router-dom";
import("../App.css");

const API = apiURL();

const Cars = () => {
  const [cars, setCars] = useState([]);

  const fetchAllCars = async () => {
    try {
      let res = await axios.get(`${API}/cars`);
      setCars(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllCars();
  }, []);

  const handleChange = (type) => {
    const sortedCars = [...cars];
    const sortTypes = {
      id: "id",
      make: "make",
      model: "model",
    };

    const sortProperty = sortTypes[type];

    const sorted = sortedCars.sort((a, b) => {
      if (sortProperty === "make") {
        return a[sortProperty].localeCompare(b[sortProperty]);
      } else if (sortProperty === "id") {
        return a[sortProperty] - b[sortProperty];
      } else {
        return null;
      }
    });
    setCars(sorted);
  };

  return (
    <div>
      <div className="sorting">
        Sort by
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="" defaultValue></option>
          <option name="id" value="id">
            id
          </option>
          <option name="make" value="make">
            make
          </option>
          {/* <option name="model" value="model">
            model
          </option> */}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Car ID</h2>
            </th>
            <th>
              <h2>Make</h2>
            </th>
            {/* <th>
              <h2>Model</h2>
            </th> */}
            <th>
              <h2>Total Mileage</h2>
            </th>
            <th>
              <h2>Total Expenses</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            const { id } = car;
            return <CarsListItem key={id} car={car} />;
          })}
        </tbody>
      </table>
      <Link to={"/cars/new"}>
        <button className="cars-new-button">Add New Car</button>
      </Link>
    </div>
  );
};

export default Cars;
