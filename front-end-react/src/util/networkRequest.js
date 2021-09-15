import axios from "axios";
import { apiURL } from "./apiURL";

const API = apiURL();

export const fetchAllCarsFN = async () => {
  let { data } = await axios.get(`${API}/cars`);
  return data.payload;
};

export const updateCarById = async (id, updatedCar) => {
  const editedCar = await axios.put(`${API}/cars/${id}`, updatedCar);
  return editedCar;
};
