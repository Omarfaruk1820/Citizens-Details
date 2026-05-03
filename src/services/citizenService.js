import axios from "axios";

const API = "http://localhost:5000/api/citizens";

export const getCitizens = () => axios.get(API);

export const addCitizen = (data) =>
  axios.post(API, data);

export const updateCitizen = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deleteCitizen = (id) =>
  axios.delete(`${API}/${id}`);