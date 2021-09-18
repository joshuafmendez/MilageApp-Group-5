import CarsListItem from "./CarsListItem";

const CarsList = ({ cars }) =>
  cars.map((car, i) => <CarsListItem key={i} car={car} />);

export default CarsList;
