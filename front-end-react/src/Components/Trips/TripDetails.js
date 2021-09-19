import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../util/apiURL";

const API = apiURL();

const TripDetails = () => {
  let [trip, setTrip] = useState({});
  let { id, trip_id } = useParams();
  let history = useHistory();

  const deleteTrip = async () => {
    try {
      await axios.delete(`${API}/cars/${id}/trips/${trip_id}`);
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
        const { data } = await axios.get(`${API}/cars/${id}/trips/${trip_id}`);
        setTrip(data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrip();
  }, [id, trip_id]);

  const {
    date,
    miles,
    reason,
    start_odometer,
    stop_odometer,
    business_use,
    favorite,
  } = trip;

  return (
    <div>
      <Link to={`/cars/${id}/trips`}>
        <button>Back</button>
      </Link>

      <h2>Car ID: {id}</h2>
      <h2>Date: {date}</h2>
      <h2>Miles: {miles}</h2>
      <h2>Reason: {reason}</h2>
      <h2>Start Odometer: {start_odometer}</h2>
      <h2>Stop Odometer: {stop_odometer}</h2>
      <h2>Business Use: {business_use ? "Yes" : "No"}</h2>
      <h2>Favorite: {favorite ? "Yes" : "No"}</h2>

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
