import CitizenRow from "./CitizenRow";

const CitizenTable = ({ citizens }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">

        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Village</th>
            <th>Occupation</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {citizens.map((citizen) => (
            <CitizenRow key={citizen._id} citizen={citizen} />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default CitizenTable;