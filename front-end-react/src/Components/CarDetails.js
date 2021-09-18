import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import TripsIndex from "../Pages/Trips/TripsIndex";
// import { useSelector } from "react-redux";

// import userEvent from "@testing-library/user-event";
import { UserContext } from "../Providers/UserProvider";
const API = apiURL();

function CarDetails() {
  const user = useContext(UserContext);
  let [car, setCar] = useState({});
  // let [userMounted,setUserMounted] = useState(false)
  let { id } = useParams();
  let history = useHistory();

  // const car = useSelector((state) => state.cars[id]);

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
    //  setTimeout(()=>{},100)
    const fetchCar = async () => {
      console.log("fetchCarfunction user", user);
      try {
        let res = await axios.get(`${API}/cars/${id}`);
        if (res.data.payload.uid === user.uid) {
          setCar(res.data.payload);
          console.log(res.data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [id, user]);

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
