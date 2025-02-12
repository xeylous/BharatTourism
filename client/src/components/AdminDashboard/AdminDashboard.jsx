import { useState, useEffect } from 'react';
import { fetchTrips, deleteTrip } from '../../api'; // Add API functions to fetch and delete trips

const AdminDashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchTrips();
        setTrips(data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTrip(id); // Call delete API
      setTrips(trips.filter((trip) => trip._id !== id)); // Remove trip from UI
    } catch (error) {
      console.error('Error deleting trip:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h2>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => window.location.href = '/add-trip'}
          className="p-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700"
        >
          Add New Trip
        </button>
      </div>
      <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip._id}>
              <td className="py-2 px-4 border-b">{trip.title}</td>
              <td className="py-2 px-4 border-b">{trip.description}</td>
              <td className="py-2 px-4 border-b">{new Date(trip.startDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{new Date(trip.endDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">₹{trip.price}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => window.location.href = `/edit-trip/${trip._id}`}
                  className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(trip._id)}
                  className="ml-4 px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
