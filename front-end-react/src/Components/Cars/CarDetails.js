import React, { useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { UserContext } from "../../Providers/UserProvider";
import { fetchAllExpensesFN, fetchAllTripsFN } from "../../util/networkRequest";
import { addExpenses } from "../../Store/Actions/expenseActions";
import "../Style/CarDetails.css";
import { addTrips } from "../../Store/Actions/tripsActions";

const API = apiURL();

function CarDetails() {
  const entireState = useSelector((state) => state);
  const { cars, expenses, trips } = entireState;
  const user = useContext(UserContext);
  const history = useHistory();
  const expensesArr = Object.values(expenses);
  const tripsArr = Object.values(trips);
  const dispatch = useDispatch();
  let { id } = useParams();

  const deleteCar = async () => {
    try {
      await axios.delete(`${API}/cars/${id}?uid=${user.uid}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    await deleteCar();
    history.push("/cars");
  };

  useEffect(() => {
    const fetchAllExpenses = async () => {
      try {
        let res = await fetchAllExpensesFN(id, user);
        dispatch(addExpenses(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllExpenses();

    const fetchAllTrips = async () => {
      try {
        let res = await fetchAllTripsFN(id, user);
        dispatch(addTrips(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTrips();
  }, [id, user, history, dispatch]);

  // useEffect(() => {
  //   if (!user) {
  //     history.push("/");
  //   }
  // }, [user, history]);

  const setCheck = (e) => {
    console.log(e.target)
  }

  if (!user) {
    return <div className="spinner-border"></div>;
  }
  // if (user.uid !== cars[id]?.uid) {
  //   // debugger;
  //   history.push("/404");
  // } 
  else {
    // debugger;
    const car = cars[id];
    return (
      <div className="car-details">
        <div className="wrapper">
          <div className="car">
            <div className="image">
              {" "}
              <img
                src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
                style={{ width: "200px" }}
                alt={"car"}
              />{" "}
            </div>
            {/* [miles] * [rate], or 175 miles * $0.56 = $98. */}
            <li>Car ID: {id}</li>
            <li>Make: {car?.make}</li>
            <li>Model: {car?.model}</li>
            <li>VIN: {car?.vin}</li>
            <li>Year: {car?.year}</li>
            <li>Odometer: {car?.odometer}</li>
            <li>Doors: {car?.doors}</li>
            mileage: $900
            <div className="border">
              <div
                className="bar"
                style={{ height: "18px", width: "20%" }}
              ></div>
            </div>
            gas: $700
            <div className="border">
              <div
                className="bar"
                style={{ height: "18px", width: "20%" }}
              ></div>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                onChange={setCheck}
                // checked={setCheck}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Default car
              </label>
            </div>
            <Link to={"/cars"}>
              <button>BACK</button>
            </Link>
            <button onClick={handleDelete}>DELETE</button>
            <Link to={`/cars/${id}/edit`}>
              <button>EDIT</button>
            </Link>
            <Link to={`/cars/${id}/expenses`}>
              Total Expenses: $
              {expensesArr.reduce((total, expense) => {
                total += expense.amount_spent;
                return total;
              }, 0)}
            </Link>
            <Link to={`/cars/${id}/trips`}>
              Total Mileage:
              {tripsArr.reduce((total, trip) => {
                total += trip.miles;
                return total;
              }, 0)}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetails;
