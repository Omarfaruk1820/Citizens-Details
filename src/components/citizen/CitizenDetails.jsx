import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCitizen } from "../services/citizenAPI";

function CitizenDetails() {
  const { id } = useParams();

  const [citizen, setCitizen] = useState(null);

  useEffect(() => {
    getCitizen(id).then((res) => {
      setCitizen(res.data);
    });
  }, [id]);

  if (!citizen) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{citizen.name}</h1>

      <p>Phone: {citizen.phone}</p>

      <p>Village: {citizen.village}</p>

      <p>Union: {citizen.union}</p>

      <p>Upazila: {citizen.upazila}</p>

      <p>Occupation: {citizen.occupation}</p>
    </div>
  );
}

export default CitizenDetails;
