import { useEffect, useContext } from "react";
import TripsListItem from "./TripsListItem";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
// import "../../App.css";
import { getAllTripsFN } from "../../util/networkRequest";
import { addTrips } from "../../Store/Actions/tripsActions";
import "../../Components/Style/TripsIndex.css"

const Trips = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { trips } = entireState;
  const { id } = useParams();
  const tripsArr = Object.values(trips);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        let res = await getAllTripsFN(id, user);
        dispatch(addTrips(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTrips();
  }, [dispatch, id, user]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="trips-table-parent">
      <table>
        <thead>
          <tr>
            <th>
              <h2>Date</h2>
            </th>
            <th>
              <h2>Miles</h2>
            </th>
            <th>
              <h2>Reason</h2>
            </th>
            <th>
              <h2>Start Odometer</h2>
            </th>
            <th>
              <h2>Stop Odometer</h2>
            </th>
            <th>
              <h2>Business Use</h2>
            </th>
            <th>
              <h2>Favorite</h2>
            </th>
            <th>
              <h2>Edit</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {tripsArr.map((trip, i) => {
            return <TripsListItem key={i} trip={trip} />;
          })}
        </tbody>
      </table>
      <Link to={`/cars/${id}/trips/trip/new`}>
        <button className="trips-new-button">Add New Trip</button>
      </Link>
    </div>
  );
};

export default Trips;
