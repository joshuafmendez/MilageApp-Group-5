import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCars } from "../../Store/Actions/carsActions";
import { getAllCarsFN } from "../../util/networkRequest";
import { UserContext } from "../../Providers/UserProvider";
import { useHistory } from "react-router-dom";
// import { signOut } from "../Services/Firebase";
import CarsListItem from "./CarsListItem";
import "../../Components/Style/Cars.css";

// TODO:
// new car on navbar
// 404 not working

const Cars = () => {
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cars } = entireState;
  const user = useContext(UserContext);
  const history = useHistory();
  const carsArr = Object.values(cars);

  // Keep for pdf conversion TODO:
  // let sorted = Object.values(cars);
  // const [sorting, setSorting] = useState(sorted);
  // const handleChange = (type) => {
  //   const sortTypes = {
  //     id: "id",
  //     make: "make",
  //     model: "model",
  //   };
  //   const sortProperty = sortTypes[type];
  //   sorted = Object.values(cars).sort((a, b) => {
  //     if (sortProperty === "make" || sortProperty === "model") {
  //       return a[sortProperty].localeCompare(b[sortProperty]);
  //     } else if (sortProperty === "id") {
  //       return a[sortProperty] - b[sortProperty];
  //     } else {
  //       return null;
  //     }
  //   });
  //   setSorting(sorted);
  // };

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await getAllCarsFN(user);
        dispatch(addCars(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCars();
  }, [dispatch, user]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div>
      <CarsListItem carsArr={carsArr} cars={cars} />
      <Link to={"/cars/car/new"}>
        <button className="cars-new-button">Add New Car</button>
      </Link>
      <br></br>
    </div>
  );
};

export default Cars;
