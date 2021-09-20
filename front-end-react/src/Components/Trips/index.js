import axios from "axios";
import { useState, useEffect, useContext} from "react";
import { apiURL } from "../../util/apiURL";
import TripsListItem from "./TripsListItem";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import "../../App.css";

const API = apiURL();

const Trips = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  // const entireState = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const { cars } = entireState;

  const [trips, setTrips] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        const { data } = await axios.get(`${API}/cars/${id}/trips`);
        setTrips(data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTrips();
  }, [id]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);


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
          {trips.map((trip, i) => {
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
