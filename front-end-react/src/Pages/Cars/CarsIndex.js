import React from "react";
import Cars from "../../Components/Cars/Cars";
import "../../Components/Style/CarsIndex.css"


const CarsIndex = ({navToggle, mileageToggle}) => {
  navToggle(false)
  mileageToggle(false)
  return (
    <div className="cars-index">
      <Cars />
    </div>
  );
};

export default CarsIndex;
