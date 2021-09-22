import CarDetails from "../../Components/Cars/CarDetails";

function CarShow({navToggle}) {
  navToggle(true)
  return (
    <div>
      <CarDetails />
    </div>
  );
}

export default CarShow;
