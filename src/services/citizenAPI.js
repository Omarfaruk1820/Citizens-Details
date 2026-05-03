import axios from "axios"

const API = "http://localhost:5000/api/citizens"

export const getCitizens = () => axios.get(API)

export const getCitizen = (id) => axios.get(`${API}/${id}`)

export const deleteCitizen = (id) => axios.delete(`${API}/${id}`)

export const updateCitizen = (id,data) =>
axios.put(`${API}/${id}`,data)