import React, { useState } from 'react';
import { addTrip } from '../api';

const AddTrip = () => {
  const [tripData, setTripData] = useState({
    title: '',
    description: '',
    facilities: '',
    startDate: '',
    endDate: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    setTripData({
      ...tripData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setTripData({
      ...tripData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', tripData.title);
    formData.append('description', tripData.description);
    formData.append('facilities', tripData.facilities);
    formData.append('startDate', tripData.startDate);
    formData.append('endDate', tripData.endDate);
    formData.append('price', tripData.price);
    formData.append('image', tripData.image);

    try {
      await addTrip(formData, token);
      alert('Trip added successfully');
    } catch (error) {
      console.error('Error adding trip:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Trip Title"
          value={tripData.title}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={tripData.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="facilities"
          placeholder="Facilities (comma-separated)"
          value={tripData.facilities}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          name="startDate"
          value={tripData.startDate}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          name="endDate"
          value={tripData.endDate}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={tripData.price}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
