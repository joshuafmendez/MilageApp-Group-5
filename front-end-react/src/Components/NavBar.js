

import logo from "../Components/Images/tripLogo.png"
import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "../Components/Style/NavBar.css"
import { FcHome } from 'react-icons/fc';
import { FcAutomotive } from 'react-icons/fc';
import { FcCurrencyExchange} from 'react-icons/fc';
import { ImRoad} from 'react-icons/im';
import { signOut } from "../Services/Firebase";

export default function NavBar() {
  const handleLogout = async () => {
    signOut()
    alert("you've been logged out")
  };

  return (

    <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xxxl"
    
       
      >
        <ReactBootStrap.Navbar.Brand id="brand" href="/">

<div className="box-logo"><img className="logo" src={logo}/></div>
        </ReactBootStrap.Navbar.Brand>
       
       
       
       
       


        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav">
    <span>
    <img className="burger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"/>
    </span>
  </ReactBootStrap.Navbar.Toggle>





        <ReactBootStrap.Navbar.Collapse className="responsive-navbar-nav">
        <nav  className="navi">

      <NavLink to="/">
        <h2>Home</h2><FcHome size="36px"/>
      </NavLink>
      <NavLink to="/cars">
        <h2>Car(s)</h2><FcAutomotive size="36px"/>
      </NavLink>
      <NavLink to="/cars/:car_id/trips/new">
        <h2>Mileage</h2><ImRoad size="36px"/>
      </NavLink>
      <NavLink to="/cars/:car_id/expenses/new">
        <h2>Car Expenses</h2><FcCurrencyExchange size="36px"/>
      </NavLink>
      <button onClick={handleLogout}> LOG OUT</button>
  
        </nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
  );
}





