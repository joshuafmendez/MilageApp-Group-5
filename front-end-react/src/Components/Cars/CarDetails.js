import React, { useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { UserContext } from "../../Providers/UserProvider";
import { fetchAllExpensesFN,fetchAllTripsFN } from "../../util/networkRequest";
import { addExpenses } from "../../Store/Actions/expenseActions";
import {addTrips} from "../../Store/Actions/tripsActions"
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
    // const fetchCar = async () => {
    //   try {
    //     await axios.get(`${API}/cars/${id}`);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchCar();

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
        let res = await fetchAllTripsFN(id,user);
        dispatch(addTrips(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTrips();

  }, [id, user, history, dispatch]);

  if (!user) {
    return <div className="spinner-border"></div>;
  } else {
    const car = cars[id];
    return (
      <div>
        <h2>Car ID: {id}</h2>
        <h2>Make: {car?.make}</h2>
        <h2>Model: {car?.model}</h2>
        <h2>VIN: {car?.vin}</h2>
        <h2>Year: {car?.year}</h2>
        <h2>Odometer: {car?.odometer}</h2>
        <h2>Doors: {car?.doors}</h2>

        <div>
          <Link to={"/cars"}>
            <button>BACK</button>
          </Link>
          <button onClick={handleDelete}>DELETE</button>
          <Link to={`/cars/${id}/edit`}>
            <button>EDIT</button>
          </Link>

          <div>
            <Link to={`/cars/${id}/expenses`}>
              Total Expenses: $
              {expensesArr.reduce((total, expense) => {
                total += expense.amount_spent;
                return total;
              }, 0)}
            </Link>
          </div>
          <div>
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
