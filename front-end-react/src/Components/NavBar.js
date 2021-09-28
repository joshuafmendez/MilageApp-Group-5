import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../Components/Style/NavBar.css";
import { FcCurrencyExchange } from "react-icons/fc";
import { ImRoad } from "react-icons/im";
import { GiSteeringWheel } from "react-icons/gi";
import { signOut } from "../Services/Firebase";
import { useHistory } from "react-router";
// import { useSelector } from "react-redux";

export default function NavBar({ navExpenses, navMileage }) {
  let [expenseForm, setExpenseForm] = useState(false);
  let [mileageForm, setMileageForm] = useState(false);
  let history = useHistory();

  // const entireState = useSelector((state) => state);
  // const { cars, expenses, trips } = entireState;
  // console.log(entireState)


  const handleLogout = async () => {
    await signOut();
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
        <NavLink to="/cars">
          <h2>All Cars</h2>
          <GiSteeringWheel size="36px" />
        </NavLink>
        {expenseForm && (
          <NavLink to={`/cars/:car_id/expenses/expense/new`}>
            <h2>Enter Expenses</h2>
            <FcCurrencyExchange size="36px" />
          </NavLink>
        )}

        {mileageForm && (
          <NavLink to="/cars/:car_id/trips/trip/new">
            <h2>Enter Mileage</h2>
            <ImRoad size="36px" />
          </NavLink>
        )}

        <button onClick={handleLogout}> LOG OUT</button>

        {/* {gasForm  && <FormPage/>} */}
      </div>
    </div>
  );
}
