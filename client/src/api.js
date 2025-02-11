import axios from 'axios';

// Base URL of your backend API
const API_URL = 'http://localhost:5000/api/trips';

// Fetch all trips
export const fetchTrips = async () => {
  return await axios.get(API_URL);
};

// Fetch a single trip by ID
export const getTrip = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Add a new trip
export const addTrip = async (tripData, token) => {
  return await axios.post(API_URL, tripData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update a trip
export const updateTrip = async (id, tripData) => {
  return await axios.put(`${API_URL}/${id}`, tripData);
};

// Delete a trip
export const deleteTrip = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
