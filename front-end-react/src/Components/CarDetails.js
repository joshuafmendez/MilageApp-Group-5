import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import { UserContext } from "../Providers/UserProvider";
const API = apiURL();

function CarDetails() {
  const user = useContext(UserContext);
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
      console.log("fetchCarfunction user", user);
      try {
        let res = await axios.get(`${API}/cars/${id}`);
        if (res.data.payload.uid === user.uid) {
          setCar(res.data.payload);
        }else{
          history.push("/")
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCar();
  }, [id, user]);

  const { make, model, vin, year, odometer, doors } = car;
if(!user){
  return<div className="spinner-border"></div>
}else{
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

        <div>
          <Link to={`/cars/${id}/expenses`}>
            Total Expenses {"display information"}
          </Link>
        </div>
        <div>
          <Link to={`/cars/${id}/trips`}>
            Total Mileage {"display information"}
          </Link>
        </div>
      </div>
    </div>
  );
}
  
}

export default CarDetails;
