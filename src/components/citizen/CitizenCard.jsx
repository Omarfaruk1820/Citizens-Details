import { Link } from "react-router-dom";

function CitizenCard({ citizen, onDelete }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold">{citizen.name}</h2>

      <p>{citizen.phone}</p>

      <p>{citizen.village}</p>

      <p>{citizen.occupation}</p>

      <div className="flex gap-2 mt-4">
        <Link
          to={`/citizen/${citizen._id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          View
        </Link>

        <Link
          to={`/edit/${citizen._id}`}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(citizen._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CitizenCard;
