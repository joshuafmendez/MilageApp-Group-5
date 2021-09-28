import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCars } from "../../Store/Actions/carsActions";
import { getAllCarsFN } from "../../util/networkRequest";
import { UserContext } from "../../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import CarsListItem from "./CarsListItem";
import "../../Components/Style/Cars.css";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { FaCalculator } from "react-icons/fa";
// import FormModal from "./FormModal";

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
    <div className="cars-div">
      {/* <div className="whit">
      <p>
  
        Welcome {user.displayName}, Trip App understands the importance of
        business owners and independant contractors documenting their
        mileage and automotive expenses and we are here to make that
        process as easy as possible for you.
      </p>
    </div> */}
      {/* <div className="gren">
      <p>Learn more about tax breaks you may qualify for:</p>
    </div> */}

      {/* 
    <ul className="ul-choices">
      <li>
        <div className="choices">
  

          <Link to={"/cars/car/new"}>
            <AiOutlineAppstoreAdd size="35px" />
         <button className="cars-new-button">Add New Car</button>
       </Link>
        </div>
      </li>

      <li>
        <div className="choices">
          <Link to={"/cars/car/new"}>
            <AiFillCar size="35px" />
            <button className="cars-new-button">Select Car</button>
          </Link>
        </div>
      </li>
    

      <li>
        <div className="choices">
          <Link to={"/cars/car/new"}>
            <FaCalculator size="33px" />
            <button className="cars-new-button">Get Tax Help</button>
          </Link>
        </div>
      </li>
    </ul> */}
      <CarsListItem carsArr={carsArr} cars={cars} />
    </div>
  );
};

export default Cars;

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
