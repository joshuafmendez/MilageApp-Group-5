// import logo from "../Components/Images/tripLogo.png"
import { NavLink } from "react-router-dom";
// import * as ReactBootStrap from "react-bootstrap";
import React, { useState } from "react";
import "../Components/Style/NavBar.css";
import { FcHome } from "react-icons/fc";
import { FcAutomotive } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { ImRoad } from "react-icons/im";
import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { signOut } from "../Services/Firebase";
// import FormPage from "./FormPage.js"

export default function NavBar() {
  let [gasForm, setGasForm] = useState(false);

  const handleLogout = async () => {
    signOut();
    alert("you've been logged out");
  };

  // const gasClick = ()=>{
  // setGasForm(!gasForm)
  // }

  return (
    <div>
      {/* <div className="sidenav">
        <NavLink to="/">
          <h2>Home</h2>
          <FcHome size="36px" />
        </NavLink>
        <NavLink to="/cars/:car_id/trips/new">
          <h2>Enter Mileage</h2>
          <ImRoad size="36px" />
        </NavLink>
        <NavLink to="/cars/:car_id/expenses/new">
          <h2>Enter Expenses</h2>
          <FcCurrencyExchange size="36px" />
        </NavLink>
        <button onClick={handleLogout}> LOG OUT</button>
      </div> */}

      <div className="right-nav">
        <NavLink to="/cars">
          <h2>Start Trip</h2>
          <GiSteeringWheel size="36px" />
        </NavLink>
        {/* <NavLink to="/cars">
          <h2>Car(s)</h2>
          <FcAutomotive size="36px" />
        </NavLink> */}
        <button onClick={() => setGasForm(!gasForm)}>
          <h2>Enter Mileage</h2>
          <FaGasPump size="36px" />
        </button>
        {gasForm && (
          <input className="gas-here" placeholder="enter gas" type="text" />
        )}

        <NavLink to="/cars/:car_id/expenses/new">
          <h2>Enter Expenses</h2>
          <FcCurrencyExchange size="36px" />
        </NavLink>
        <button onClick={handleLogout}> LOG OUT</button>

        {/* {gasForm  && <FormPage/>} */}
      </div>
      {/* {gasForm && (
  <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>
      )} */}
    </div>
  );
}

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// const FormPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h4 text-center mb-4">Sign up</p>
//         <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//           Your name
//         </label>
//         <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
//         <br />
//         <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
//           Your email
//         </label>
//         <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
//         <br />
//         <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
//           Confirm your email
//         </label>
//         <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
//         <br />
//         <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
//           Your password
//         </label>
//         <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
//         <div className="text-center mt-4">
//           <MDBBtn color="unique" type="submit">
//             Register
//           </MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };

// export default FormPage;
