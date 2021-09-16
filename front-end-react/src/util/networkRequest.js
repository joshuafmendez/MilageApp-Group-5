import axios from "axios";
import { apiURL } from "./apiURL";

const API = apiURL();

export const fetchAllCarsFN = async (user) => {
  let { data } = await axios.get(`${API}/cars?uid=${user.uid}`);
  return data.payload;
};

export const updateCarById = async (id, updatedCar) => {
  const editedCar = await axios.put(`${API}/cars/${id}`, updatedCar);
  return editedCar;
};
