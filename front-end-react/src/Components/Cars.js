import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCars } from "../Store/Actions/carsActions";
import CarsList from "./CarsList";
import { fetchAllCarsFN } from "../util/networkRequest";

const Cars = () => {
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cars } = entireState;
  
  let sorted = Object.values(cars);

  const [sorting, setSorting] = useState(sorted);

  const handleChange = (type) => {
    const sortTypes = {
      id: "id",
      make: "make",
      model: "model",
    };
    const sortProperty = sortTypes[type];
    sorted = Object.values(cars).sort((a, b) => {
      if (sortProperty === "make" || sortProperty === "model") {
        return a[sortProperty].localeCompare(b[sortProperty]);
      } else if (sortProperty === "id") {
        return a[sortProperty] - b[sortProperty];
      } else {
        return null;
      }
    });
    setSorting(sorted);
  };

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await fetchAllCarsFN();
        setSorting(Object.values(res));
        dispatch(addCars(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCars();
  }, [dispatch]);

  return (
    <div>
      <div className="sorting">
        Sort by
        <select id="sorting-id" onChange={(e) => handleChange(e.target.value)}>
          <option value="" defaultValue></option>
          <option name="id" value="id">
            id
          </option>
          <option name="make" value="make">
            make
          </option>
          <option name="model" value="model">
            model
          </option>
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
            <th>
              <h2>Model</h2>
            </th>
            <th>
              <h2>Total Mileage</h2>
            </th>
            <th>
              <h2>Total Expenses</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <CarsList cars={sorting} />
        </tbody>
      </table>
      <Link to={"/cars/new"}>
        <button className="cars-new-button">Add New Car</button>
      </Link>
    </div>
  );
};

export default Cars;
