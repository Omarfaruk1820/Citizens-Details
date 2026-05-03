import { useState } from "react";
import axios from "axios";

const CitizenForm = () => {

  const initialFormData = {
    name: "",
    phone: "",
    village: "",
    union: "",
    upazila: "",
    occupation: "",
    gender: "",
    bloodGroup: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Name and Phone are required!");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/citizens",
        formData
      );

      console.log("Submitted Citizen:", formData);
      console.log("Server Response:", res.data);

      alert("Citizen added successfully!");

      // Reset form
      setFormData(initialFormData);

    } catch (error) {
      console.error("Error adding citizen:", error);
      alert("Failed to add citizen!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Name */}
        <div>
          <label className="label">Citizen Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="label">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone"
            className="input input-bordered w-full"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Village */}
        <div>
          <label className="label">Village</label>
          <input
            type="text"
            name="village"
            placeholder="Village name"
            className="input input-bordered w-full"
            value={formData.village}
            onChange={handleChange}
          />
        </div>

        {/* Union */}
        <div>
          <label className="label">Union</label>
          <input
            type="text"
            name="union"
            placeholder="Union name"
            className="input input-bordered w-full"
            value={formData.union}
            onChange={handleChange}
          />
        </div>

        {/* Upazila */}
        <div>
          <label className="label">Upazila</label>
          <input
            type="text"
            name="upazila"
            placeholder="Upazila name"
            className="input input-bordered w-full"
            value={formData.upazila}
            onChange={handleChange}
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="label">Occupation</label>
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            className="input input-bordered w-full"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="label">Gender</label>
          <select
            name="gender"
            className="select select-bordered w-full"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Blood Group */}
        <div>
          <label className="label">Blood Group</label>
          <select
            name="bloodGroup"
            className="select select-bordered w-full"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

      </div>

      <div className="mt-6">
        <button
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Citizen"}
        </button>
      </div>
    </form>
  );
};

export default CitizenForm;