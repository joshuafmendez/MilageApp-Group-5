import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../Components/Style/CarsListItem.css";
import { selectCar } from "../../Store/Actions/carsActions";
// import Slider from "./Slider.js";

function CarsListItem({ car }) {
  const { id, make, model } = car;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectCar(car));
  };
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
        <Link to={`/cars/${id}`}>
          <h2> {id}</h2>
        </Link>
        {/* [miles] * [rate], or 175 miles * $0.56 = $98. */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to={`/cars/${id}`} onClick={handleClick}>
          <h2>
            {/* {" "} */}
            {make} {model}
          </h2>
        </Link>
        mileage: $900
        <div className="border">
          <div className="bar" style={{ height: "18px", width: "20%" }}></div>
        </div>
        gas: $700
        <div className="border">
          <div className="bar" style={{ height: "18px", width: "20%" }}></div>
        </div>
        <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label" for="exampleRadios1">
    Default car
  </label>
</div>
      </div>
      <br></br>
      
    </div>
  );
}

export default CarsListItem;
