import React from "react";
import Cars from "../../Components/Cars/Cars";

const CarsIndex = ({navToggle, mileageToggle}) => {
  navToggle(false)
  mileageToggle(false)
  return (
    <div>
      <Cars />
    </div>
  );
};

export default CarsIndex;
