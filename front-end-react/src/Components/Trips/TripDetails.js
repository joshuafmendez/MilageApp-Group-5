import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Providers/UserProvider";
import { apiURL } from "../../util/apiURL";

const API = apiURL();

const TripDetails = () => {
  const user = useContext(UserContext);
  let [trip, setTrip] = useState({});
  let { id, trip_id } = useParams();
  let history = useHistory();
  const deleteTrip = async () => {
    try {
      await axios.delete(`${API}/cars/${id}/trips/${trip_id}?uid=${user.uid}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    await deleteTrip();
    history.push(`/cars/${id}/trips`);
  };

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        if (user) {
          const { data } = await axios.get(
            `${API}/cars/${id}/trips/${trip_id}?uid=${user.uid}`
          );
          setTrip(data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrip();
  }, [id, trip_id, user]);

  const {
    date,
    miles,
    reason,
    start_odometer,
    stop_odometer,
    business_use,
    favorite,
  } = trip;

  let newDate = new Date(date);
  newDate.setDate(newDate.getDate(date) + 1);

  return (
    <div>
      <Link to={`/cars/${id}/trips`}>
        <button>Back</button>
      </Link>

      <p>Car ID: {id}</p>
      <p>Date: {newDate.toLocaleDateString()}</p>
      <p>Miles: {miles}</p>
      <p>Reason: {reason}</p>
      <p>Start Odometer: {start_odometer}</p>
      <p>Stop Odometer: {stop_odometer}</p>
      <p>Business Use: {business_use ? "Yes" : "No"}</p>
      <p>Favorite: {favorite ? "Yes" : "No"}</p>

      <div>
        <Link to={`/cars/${id}/trips/${trip_id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TripDetails;
