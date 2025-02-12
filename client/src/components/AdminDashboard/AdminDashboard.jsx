import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchTrips, deleteTrip } from '../../api'; // Add API functions to fetch and delete trips

const AdminDashboard = () => {
  const [trips, setTrips] = useState([]);
  const [logoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the admin is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login'); // Redirect to admin login if not authenticated
      return;
    }

    const fetchData = async () => {
      try {
        const { data } = await fetchTrips();
        setTrips(data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchData();

    // Handle browser back button
    const handlePopState = () => {
      setLogoutPopupOpen(true);
      window.history.pushState(null, null, window.location.pathname);
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await deleteTrip(id); // Call delete API
      setTrips(trips.filter((trip) => trip._id !== id)); // Remove trip from UI
    } catch (error) {
      console.error('Error deleting trip:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Remove admin token
    navigate('/admin-login'); // Redirect to admin login
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('adminToken'); // Clear token from localStorage
    navigate('/admin-login'); // Redirect to admin login
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="p-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
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

      {logoutPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Logout</h3>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={handleConfirmLogout} 
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Confirm
              </button>
              <button 
                onClick={() => setLogoutPopupOpen(false)}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
