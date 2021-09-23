import axios from "axios";
import { apiURL } from "./apiURL";

const API = apiURL();

export const fetchAllCarsFN = async (user) => {
  let { data } = await axios.get(`${API}/cars?uid=${user.uid}`);
  return data.payload;
};

export const updateCarById = async (id, updatedCar,user) => {
  const editedCar = await axios.put(`${API}/cars/${id}?uid=${user.uid}`, updatedCar);
  return editedCar;
};

export const fetchAllExpensesFN = async (id, user) => {
  let { data } = await axios.get(`${API}/cars/${id}/expenses?uid=${user.uid}`);
  return data.payload;
};

export const updateExpenseById = async (id, expense_id, updatedExpense) => {
  const editedExpense = await axios.put(
    `${API}/cars/${id}/expenses/${expense_id}`,
    updatedExpense
  );
  return editedExpense;
};

export const fetchAllTripsFN = async (id, user) => {
  let { data } = await axios.get(`${API}/cars/${id}/trips?uid=${user.uid}`);
  return data.payload;
};

export const updateTripById = async (id, trip_id, updatedTrip) => {
  const editedTrip = await axios.put(
    `${API}/cars/${id}/trips/${trip_id}`,
    updatedTrip
  );
  return editedTrip;
};
