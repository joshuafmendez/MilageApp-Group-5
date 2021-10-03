import { Link } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = ({ id, handleReport }) => {
  return (
    <div className="left-nav">
      <div className="chrome">
        <div className="nav-expenses">
          <Link to={`/cars/${id}/expenses/expense/new`}>✚ Enter Expense</Link>
        </div>
      </div>

      <div className="chrome">
        <div className="nav-expenses">
          <Link to={`/cars/${id}/trips/trip/new`}> ✚ Enter Mileage </Link>
        </div>
      </div>

      <div className="chrome">
        <div className="nav-expenses">
          <button onClick={handleReport} className="cars-new-button">
            🗂 Generate Report    
          </button>
        </div>
      </div>

      <div className="chrome">
        <div className="nav-expenses">
          <Link to={`/cars/${id}/expenses`}>📕 Expense Table</Link>
        </div>
      </div>

      <div className="chrome">
        <div className="nav-expenses">
          <Link to={`/cars/${id}/trips`}>📘 Mileage Table</Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
