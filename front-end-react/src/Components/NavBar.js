import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <div>
        <NavLink to="/cars">
          <h4>Car(s)</h4>
        </NavLink>
        <NavLink to="/cars/:car_id/trips/new">
          <h4>Mileage</h4>
        </NavLink>
        <NavLink to="/cars/:car_id/expenses/new">
          <h4>Car Expenses</h4>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
