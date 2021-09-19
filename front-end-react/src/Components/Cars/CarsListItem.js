import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD:front-end-react/src/Components/CarsListItem.js
import { useSelector, useDispatch } from "react-redux";
import "../Components/Style/CardListItem.css";
import { selectCar } from "../Store/Actions/carsActions";
=======
import "../../Components/Style/CardListItem.css";
>>>>>>> 19751aaaf7b2e6bdf97102346a8cd6c37abf9c25:front-end-react/src/Components/Cars/CarsListItem.js
// import Slider from "./Slider.js";

function CarsListItem({ car }) {
  const { id, make, model } = car;
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const {selectedCar} = entireState;
  const handleClick =()=>{
    dispatch(selectCar(car))
   
  }
  console.log(selectedCar)
  return (
    <div className="wrapper">
      <div className="card text-center">
        <div className="image">
          {" "}
          <img
            src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
            style={{ width: "200px" }}
            alt={"car"}
          />{" "}
        </div>
        <div className="about-product text-center">
          {/* <Link to={`/cars/${id}`}>
          <h2> {id}</h2>
        </Link> */}

          {/* [miles] * [rate], or 175 miles * $0.56 = $98. */}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to={`/cars/${id}`} onClick = {handleClick}>
          <h2>
            {" "}
            {make} {model}
          </h2>
        </Link>
        mileage
        <div className="border">
          <div className="bar" style={{ height: "24px", width: "20%" }}></div>
        </div>
        gas
        <div className="border">
          <div className="bar" style={{ height: "24px", width: "20%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default CarsListItem;
