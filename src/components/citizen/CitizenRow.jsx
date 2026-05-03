const CitizenRow = ({ citizen }) => {
  return (
    <tr>

      <td>
        <img
          src={citizen.photo}
          alt=""
          className="w-12 h-12 rounded-full"
        />
      </td>

      <td>{citizen.name}</td>
      <td>{citizen.phone}</td>
      <td>{citizen.village}</td>
      <td>{citizen.occupation}</td>

      <td className="space-x-2">
        <button className="btn btn-sm btn-info">Edit</button>
        <button className="btn btn-sm btn-error">Delete</button>
      </td>

    </tr>
  );
};

export default CitizenRow;