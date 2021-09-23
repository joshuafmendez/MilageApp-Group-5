import CarDetails from "../../Components/Cars/CarDetails";

function CarShow({navToggle,mileageToggle}) {
  navToggle(true)
  mileageToggle(true)
  return (
    <div>
      <CarDetails />
    </div>
  );
}

export default CarShow;
