import React from "react";
import Cars from "../../Components/Cars/Cars";

const CarsIndex = ({navToggle}) => {
  navToggle(false)
  return (
    <div>
      <Cars />
    </div>
  );
};

export default CarsIndex;
