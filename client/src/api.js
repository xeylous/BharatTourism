import axios from 'axios';

// Base URL of your backend API
const BASE_URL = 'http://localhost:5000/api';
const TRIPS_URL = `${BASE_URL}/trips`;

// Auth endpoints
export const registerUser = async (formData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  return response.json();
};

export const loginUser = async (credentials) => {
  return await axios.post(`${BASE_URL}/auth/login`, credentials);
};

// Add this function for admin login
export const loginAdmin = async (credentials) => {
  return await axios.post(`${BASE_URL}/auth/admin-login`, credentials);
};

// Trips endpoints
export const fetchTrips = async () => {
  return await axios.get(TRIPS_URL);
};

export const getTrip = async (id) => {
  return await axios.get(`${TRIPS_URL}/${id}`);
};

export const addTrip = async (tripData, token) => {
  return await axios.post(TRIPS_URL, tripData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateTrip = async (id, tripData) => {
  return await axios.put(`${TRIPS_URL}/${id}`, tripData);
};

export const deleteTrip = async (id) => {
  return await axios.delete(`${TRIPS_URL}/${id}`);
};
