import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import TripsIndex from "../Pages/Trips/TripsIndex";

const API = apiURL();

function CarDetails() {
  let [car, setCar] = useState({});
  let { id } = useParams();
  let history = useHistory();

  const deleteCar = async () => {
    try {
      await axios.delete(`${API}/cars/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    await deleteCar();
    history.push("/cars");
  };

  useEffect(() => {
    const fetchCar = async () => {
      try {
        let res = await axios.get(`${API}/cars/${id}`);
        setCar(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [id]);

  const { make, model, vin, year, odometer, doors } = car;

  return (
    <div>
      <h2>Car ID: {id}</h2>
      <h2>Make: {make}</h2>
      <h2>Model: {model}</h2>
      <h2>VIN: {vin}</h2>
      <h2>Year: {year}</h2>
      <h2>Odometer: {odometer}</h2>
      <h2>Doors: {doors}</h2>

      <div>
        <Link to={"/cars"}>
          <button>BACK</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
        <Link to={`/cars/${id}/edit`}>
          <button>EDIT</button>
        </Link>

        <TripsIndex />
      </div>
    </div>
  );
}

export default CarDetails;
