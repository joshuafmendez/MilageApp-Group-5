import { useEffect, useContext } from "react";
import TripsListItem from "./TripsListItem";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTripsFN } from "../../util/networkRequest";
import { addTrips } from "../../Store/Actions/tripsActions";
import "../../Components/Style/Trips/TripsIndex.css";

const Trips = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { cars, trips } = entireState;
  const { id } = useParams();
  const tripsArr = Object.values(trips);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        if (user) {
          let res = await getAllTripsFN(id, user);
          dispatch(addTrips(res));
        }
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
      <h2>
        {cars[id]?.make} {cars[id]?.model} Mileage
      </h2>
      <table>
        <thead>
          <tr>
            <th>
              <p>Date</p>
            </th>
            <th>
              <p>Miles</p>
            </th>
            <th>
              <p>Reason</p>
            </th>
            {/* <th>
              <p>Start Odometer</p>
            </th>
            <th>
              <p>Stop Odometer</p>
            </th> */}
            <th>
              <p>Business Use</p>
            </th>
            <th>
              <p>Favorite</p>
            </th>
            <th>
              <p>Edit</p>
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
