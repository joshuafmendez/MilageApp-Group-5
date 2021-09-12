import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/cars">
        <h2>Car(s)</h2>
      </NavLink>
      <NavLink to="/cars/:car_id/trips/new">
        <h2>Mileage</h2>
      </NavLink>
      <NavLink to="/cars/:car_id/expenses/new">
        <h2>Car Expenses</h2>
      </NavLink>
    </nav>
  );
};

export default NavBar;
