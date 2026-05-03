import { useEffect, useState } from "react";
import axios from "axios";

function Citizens() {
  const [citizens, setCitizens] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const citizensPerPage = 8;

  useEffect(() => {
    fetchCitizens();
  }, []);

  const fetchCitizens = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/citizens");
      setCitizens(res.data);
    } catch (error) {
      console.error("Error fetching citizens:", error);
    } finally {
      setLoading(false);
    }
  };

  // search filter
  const filteredCitizens = citizens.filter((citizen) => {
    const keyword = search.toLowerCase();

    return (
      citizen.name?.toLowerCase().includes(keyword) ||
      citizen.phone?.toLowerCase().includes(keyword) ||
      citizen.village?.toLowerCase().includes(keyword)
    );
  });

  // pagination logic
  const indexOfLastCitizen = currentPage * citizensPerPage;
  const indexOfFirstCitizen = indexOfLastCitizen - citizensPerPage;

  const currentCitizens = filteredCitizens.slice(
    indexOfFirstCitizen,
    indexOfLastCitizen,
  );

  const totalPages = Math.ceil(filteredCitizens.length / citizensPerPage);

  if (loading) {
    return <p className="text-center mt-10">Loading citizens...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Citizens</h1>

      {/* Search Bar */}

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name, phone, village..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-2 w-full max-w-md shadow"
        />
      </div>

      {/* Citizen Grid */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentCitizens.map((citizen) => (
          <div
            key={citizen._id}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition"
          >
            {/* Photo */}

            <div className="mb-3">
              {citizen.photo ? (
                <img
                  src={`http://localhost:5000/uploads/citizens/${citizen.photo}`}
                  alt={citizen.name}
                  className="w-full h-40 object-cover rounded"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
                  No Photo
                </div>
              )}
            </div>

            <h2 className="text-xl font-semibold">{citizen.name}</h2>

            <p className="text-gray-600">📞 {citizen.phone}</p>

            <p className="text-gray-600">🏠 {citizen.village}</p>

            <p className="text-gray-600">💼 {citizen.occupation}</p>

            <p className="text-gray-500 text-sm mt-2">Union: {citizen.union}</p>

            <p className="text-gray-500 text-sm">Upazila: {citizen.upazila}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="flex justify-center mt-10 gap-2 flex-wrap">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Citizens;
