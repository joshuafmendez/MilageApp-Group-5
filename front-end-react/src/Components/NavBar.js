import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Components/Style/NavBar.css";
import { FcCurrencyExchange } from "react-icons/fc";
import { ImRoad } from "react-icons/im";
import { GiSteeringWheel } from "react-icons/gi";
import { signOut } from "../Services/Firebase";
import { useHistory } from "react-router";
// import { useSelector } from "react-redux";
import expenses from "../Store/Reducers/expenses";

export default function NavBar({ navExpenses, navMileage }) {
  let [expenseForm, setExpenseForm] = useState(false);
  let [mileageForm, setMileageForm] = useState(false);
  let history = useHistory();

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

  return (
    <div>
      <div className="right-nav">



        
        <div className="nav-expenses">
          <p className="total-expenses">Total Expenses</p>
          <p className="sum-expenses">$200,000.00</p>
        </div>




        <div className="nav-expenses">
          <p className="total-expenses">Total mileage</p>
          <p className="sum-mileage">9,000,000</p>
        </div>





        {/* <NavLink to="/cars">
          <h2>All Cars</h2>
          <GiSteeringWheel size="36px" /> */}
  
        
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
