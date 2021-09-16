// import React from "react";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { signOut } from "../Services/Firebase";
import axios from "axios";
// import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
 import CarsListItem from "./CarsListItem";
import "../Components/Style/Cars.css"
import { Link } from "react-router-dom";
import("../App.css");


const API = apiURL();

const Cars = () => {
  const [cars, setCars] = useState([]);

  const history = useHistory()
  const user = useContext(UserContext)

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
      if (sortProperty === "make" || sortProperty === "model") {
        return a[sortProperty].localeCompare(b[sortProperty]);
      } else if (sortProperty === "id") {
        return a[sortProperty] - b[sortProperty];
      } else {
        return null;
      }
    });
    setCars(sorted);
  };


  useEffect(() => { 
    if(!user){
      history.push("/")
      }
    }, [user, history]);



  return (
    <div>
<ul className="cars-list">
{cars.map((car) => {
            const { id } = car;
            return <CarsListItem key={id} car={car} />;
          })}
</ul>


      <Link to={"/cars/new/new"}>
        <button className="cars-new-button">Add New Car</button>
      </Link>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    </div>
  );
};

export default Cars;
