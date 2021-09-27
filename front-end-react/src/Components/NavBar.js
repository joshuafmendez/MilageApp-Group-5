import { NavLink, useParams, useHistory, Link } from "react-router-dom";
import React, { useState, useEffect,useContext } from "react";
import "../Components/Style/NavBar.css";
import { FcCurrencyExchange } from "react-icons/fc";
import { ImRoad } from "react-icons/im";
// import { GiSteeringWheel } from "react-icons/gi";
import { signOut } from "../Services/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../Providers/UserProvider";
import {
  deleteCarByID,
  getAllExpensesFN,
  getAllTripsFN,
} from "../util/networkRequest";
import { addExpenses } from "../Store/Actions/expenseActions";
import { addTrips } from "../Store/Actions/tripsActions";






// import { useSelector } from "react-redux";
import expenses from "../Store/Reducers/expenses";

export default function NavBar({ navExpenses, navMileage }) {
  const entireState = useSelector((state) => state);
  const { cars, expenses, trips } = entireState;
  const user = useContext(UserContext);
  const history = useHistory();
  const expensesArr = Object.values(expenses);
  const tripsArr = Object.values(trips);
  const dispatch = useDispatch();
  let { id } = useParams();
  let [expenseForm, setExpenseForm] = useState(false);
  let [mileageForm, setMileageForm] = useState(false);

  // const entireState = useSelector((state) => state);
  // const { cars, expenses, trips } = entireState;
  // console.log(entireState)

  const handleLogout = async () => {
    signOut();
    history.push("/");
  };
  










  
  useEffect(() => {
    setExpenseForm(navExpenses);
  }, [navExpenses]);
  useEffect(() => {
    setMileageForm(navMileage);
  }, [navMileage]);



  useEffect(() => {
    const getAllExpenses = async () => {
      try {
        let res = await getAllExpensesFN(id, user);
        dispatch(addExpenses(res));
        // console.log("res", res);
      } catch (error) {
        console.log(error);
      }
    };
    getAllExpenses();

    const getAllTrips = async () => {
      try {
        let res = await getAllTripsFN(id, user);
        dispatch(addTrips(res));
      } catch (error) {
        console.log(error);
      }
    };
    getAllTrips();
  }, [id, user, history, dispatch]);

  // const setCheck = (e) => {
  //   console.log(e.target);
  // };

  if (!user) {
    return <div className="spinner-border"></div>;
  } else {
    let car = cars[id];

    let totalBusinessExpenses = 0;
    let expenses = [["Expense", "Date", "Amount"]];
    expensesArr.forEach((expense) => {
      if (expense.business_use) {
        expenses.push([
          `${expense.expense_type}`,
          `${expense.date}`,
          `$${expense.amount_spent.toLocaleString()}`,
        ]);
        totalBusinessExpenses += Number(expense.amount_spent);
      }
    });
    console.log("expenses outside handleReport", expenses);

    let totalBusinessTrips = 0;
    let trips = [["Date", "Miles", "Reason"]];

    tripsArr.forEach((trip) => {
      if (trip.business_use) {
        trips.push([`${trip.date}`, `${trip.miles}`, `${trip.reason}`]);
        totalBusinessTrips += Number(trip.miles);
      }
    });


  }











  return (
    <div>
      <div className="right-nav">



        
        <div className="nav-expenses">
          <p className="total-expenses">Total Expenses</p>
          <Link to={`/cars/${id}/expenses`}>

          {expensesArr.reduce((total, expense) => {
            total += expense.amount_spent;
            return total;
          }, 0)}
        </Link>
        </div>



        <div className="nav-expenses">
          <p className="total-expenses">Total mileage</p>

        
          <Link to={`/cars/${id}/trips`}>
   
          {tripsArr.reduce((total, trip) => {
            total += trip.miles;
            return total;
          }, 0)}
        </Link>

         
        </div>





        
        {expenseForm && (

<div className="nav-expenses">
<NavLink to="/cars"> ✚ Enter Expenses     </NavLink>
<FcCurrencyExchange size="16px" />
</div>
        )}

        {mileageForm && (
 
 <div className="nav-expenses">
 <NavLink to="/cars"> ✚ Enter Mileage    </NavLink>
 <ImRoad size="16px" />
 </div>
        )}
        {/* {expenseForm && (
          <NavLink to="/cars/:car_id/expenses/expense/new">
            <h2>Enter Expenses</h2>
            <FcCurrencyExchange size="36px" />
          </NavLink>
        )}

        {mileageForm && (
          <NavLink to="/cars/:car_id/trips/trip/new">
            <h2>Enter Mileage</h2>
            <ImRoad size="36px" />
          </NavLink>
        )} */}






        

        <button onClick={handleLogout}> LOG OUT</button>

        {/* {gasForm  && <FormPage/>} */}
      </div>
    </div>
  );
}
