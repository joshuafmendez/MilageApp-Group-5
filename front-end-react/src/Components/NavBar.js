// import logo from "../Components/Images/tripLogo.png"
import { NavLink } from "react-router-dom";
// import * as ReactBootStrap from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../Components/Style/NavBar.css";
import { FcHome } from "react-icons/fc";
import { FcAutomotive } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { ImRoad } from "react-icons/im";
import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { signOut } from "../Services/Firebase";
// import FormPage from "./FormPage.js"

export default function NavBar({ navExpenses }) {
  let [expenseForm, setExpenseForm] = useState(false);

  const handleLogout = async () => {
    signOut();
    alert("you've been logged out");
  };

  // const gasClick = ()=>{
  // setGasForm(!gasForm)
  // }
  useEffect(() => {
    setExpenseForm(navExpenses);
  });

  return (
    <div>
      <div className="right-nav">
        <NavLink to="/cars">
          <h2>All Cars</h2>
          <GiSteeringWheel size="36px" />
        </NavLink>
        {expenseForm && (
          <NavLink to="/cars/:car_id/expenses/expense/new">
            <h2>Enter Expenses</h2>
            <FcCurrencyExchange size="36px" />
          </NavLink>
        )}

        <button onClick={handleLogout}> LOG OUT</button>

        {/* {gasForm  && <FormPage/>} */}
      </div>
    </div>
  );
}
