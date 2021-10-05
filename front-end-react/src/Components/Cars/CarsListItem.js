import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "../../Components/Style/Cars/CarsListItem.css";

function CarsListItem({ carsArr }) {
  let showElement = false;

  return (
    <div className="list-cars">
      <ul
        style={
          showElement
            ? { display: "none" }
            : { display: "flex", justifyContent: "space-around" }
        }
        className="ul-show"
      >
        {carsArr.map((car, i) => {
          return (
            <li key={i} className="li-show">
              <div className="card-center">
                {/* br needs to be redone */}
                <br></br>
                <br></br>
                <br></br>{" "}
                <img
                  className="car-pic"
                  src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
                  alt={"car"}
                />{" "}
                <div className="make-model">
                  {car?.make} {car?.model}
                  <Link to={`/cars/${car?.id}`}>
                    <button className="showMe">Select</button>
                  </Link>
                </div>
                {/* br needs to be redone */}
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