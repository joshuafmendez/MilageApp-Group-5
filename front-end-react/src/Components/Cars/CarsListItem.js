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
        style={showElement ? { display: "none" } : { display: "flex" ,justifyContent:"space-between"}}
        className="ul-show"
      >
        {carsArr.map((car, i) => {
          return (
            <li key={i} className="li-show">
              <div className="card-center">
             
                <br></br>
                <br></br>
                <br></br>
             
                  {" "}
                  <img
                  className="car-pic"
                    src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
                    // style={{ width: "200px" }}
                    alt={"car"}
                  />{" "}
                  <div className="make-model">
                  {car.make} {car.model}
             
                  <Link to={`/cars/${car.id}`} onClick={handleClick}>
                <button
                    className="showMe"
                 
                  >
                  Select
                  </button>
                </Link>
                </div>
                <br></br>

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
