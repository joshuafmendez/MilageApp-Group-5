import { useParams, useHistory, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "../Components/Style/NavBar.css";
import { signOut } from "../Services/Firebase";
import { useDispatch } from "react-redux";
import { UserContext } from "../Providers/UserProvider";
import { getAllExpensesFN, getAllTripsFN } from "../util/networkRequest";
import { addExpenses } from "../Store/Actions/expenseActions";
import { addTrips } from "../Store/Actions/tripsActions";

export default function NavBar() {
  const user = useContext(UserContext);
  const dispatch = useDispatch();
  let { id } = useParams();
  let history = useHistory();

  const handleLogout = async () => {
    try {
      await signOut();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllExpenses = async () => {
      try {
        if (user) {
          let res = await getAllExpensesFN(id, user);
          dispatch(addExpenses(res));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllExpenses();

    const getAllTrips = async () => {
      try {
        if (user) {
          let res = await getAllTripsFN(id, user);
          dispatch(addTrips(res));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllTrips();
  }, [id, user, history, dispatch]);

  return (
    <div className="log-start">
      <div className="corner-fix">
        <Link to={`/cars`}>Home</Link>
        <div className="dropdown">
          <div className="dropbtn">Driver Resources</div>
          <div className="dropdown-content">
            <a
              href="https://www.uber.com/us/en/drive/tax-information/"
              target="blank"
            >
              Uber
            </a>
            <a href="https://www.lyft.com/driver/taxes" target="blank">
              Lyft
            </a>
            {/* This link will change */}
            <a href="https://google.com" target="blank">
              Other
            </a>
          </div>
        </div>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
}
