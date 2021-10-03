import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../../Components/Style/CarsListItem.css";
import { selectCar } from "../../Store/Actions/carsActions";

function CarsListItem({ car, carsArr }) {
  let [showElement, setShowElement] = useState(false);
  const dispatch = useDispatch();

  // FIXME: This returns undefined
  const handleClick = () => {
    console.log("car", car);
    dispatch(selectCar(car));
  };

  return (
    <div className="list-cars">
      <ul
        style={showElement ? { display: "none" } : { display: "block" }}
        className="ul-show"
      >
        {carsArr.map((car, i) => {
          return (
            <li key={i} className="li-show">
              <div className="card text-center">
                <h2 className="make-model">
                  {car.make} {car.model}
                </h2>
                <br></br>
                <br></br>
                <br></br>
                <div className="image">
                  {" "}
                  <img
                    src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
                    style={{ width: "200px" }}
                    alt={"car"}
                  />{" "}
                </div>
                <br></br>

                <Link to={`/cars/${car.id}`} onClick={handleClick}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button
                    className="showMe"
                    onClick={() => setShowElement(!showElement)}
                  >
                    Make Default Car
                  </button>
                </Link>
              </div>
              {showElement && (
                <input
                  className="gas-here"
                  placeholder="enter gas"
                  type="text"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CarsListItem;