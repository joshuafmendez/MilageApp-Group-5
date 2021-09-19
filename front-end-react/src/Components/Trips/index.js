import { useEffect } from "react";
import { apiURL } from "../../util/apiURL";
import TripsListItem from "./TripsListItem";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { fetchAllTripsFN } from "../../util/networkRequest";
import { addTrips } from "../../Store/Actions/tripsActions";

const API = apiURL();

const Trips = () => {
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { trips } = entireState;
  const { id } = useParams();
  const tripsArr = Object.values(trips);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        let res = await fetchAllTripsFN(id);
        dispatch(addTrips(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTrips();
  }, [dispatch, id]);

  return (
    <div>
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
