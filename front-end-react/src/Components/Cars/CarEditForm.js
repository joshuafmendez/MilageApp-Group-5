import { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { addCar } from "../../Store/Actions/carsActions";
import { useSelector, useDispatch } from "react-redux";
import { updateCarById } from "../../util/networkRequest";
import "../Style/CarEditForm.css"


function CarEditForm() {
  let { id } = useParams();
  let history = useHistory();
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const car = cars[id];

  const [carInput, setCarInput] = useState({
    make: car.make,
    model: car.model,
    vin: car.vin,
    year: car.year,
    odometer: car.odometer,
    doors: car.doors,
    is_default: car.is_default
  });

  const updateCar = async (updatedCar) => {
    try {
      const editedCar = await updateCarById(id, updatedCar);
      dispatch(addCar(editedCar));
      history.push(`/cars/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCarInput({ ...carInput, [e.target.id]: e.target.value });
  };

  // if (!car) {
  //   useEffect(() => {
  //     const fetchCar = async () => {
  //       try {
  //         const { data } = await axios.get(`${API}/cars/${id}`);
  //         // dispatch(addCar(data.payload));
  //         setCarInput(data.payload);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fetchCar();
  //   }, [dispatch, id]);
  // }
  const isDefaultCheckbox = (e) => {
    setCarInput({ ...carInput, is_default: !carInput.is_default });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCar(carInput, id);
  };

  const { make, model, vin, year, odometer, doors, is_default } = carInput;

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="make">Make:</label>
        <input
          value={make}
          type="text"
          onChange={handleChange}
          id="make"
          placeholder="Enter make of the car"
        />
        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          value={model}
          onChange={handleChange}
          placeholder="Enter model of the car"
        />
        <label htmlFor="vin">VIN:</label>
        <input
          id="vin"
          type="text"
          value={vin}
          onChange={handleChange}
          placeholder="Enter VIN of the car"
        />
        <label htmlFor="year">year:</label>
        <input
          id="year"
          type="number"
          value={year}
          min="1900"
          onChange={handleChange}
        />
        <label htmlFor="odometer">Odometer:</label>
        <input
          id="odometer"
          type="number"
          value={odometer}
          min="0"
          placeholder="Enter the mileage on the odometer"
          onChange={handleChange}
        />
        <label htmlFor="doors">Doors:</label>
        <input
          id="doors"
          type="number"
          value={doors}
          min="2"
          placeholder="Enter the number doors of the car"
          onChange={handleChange}
        />

<div className="form-check">
  <input id="is_default" value={is_default} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={isDefaultCheckbox}/>
  <label className="form-check-label" for="exampleRadios1">
    default car
  </label>
</div>
        <div>
          <button type="submit">Submit</button>
          <Link to={`/cars`}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CarEditForm;
