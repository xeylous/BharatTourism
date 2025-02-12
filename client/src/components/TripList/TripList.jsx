import { useEffect, useState } from 'react';
import { fetchTrips } from '../../api';

const TripList = () => {
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

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Trips</h2>
      <ul className="space-y-6">
        {trips.map((trip) => (
          <li key={trip._id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{trip.title}</h3>
            <p>{trip.description}</p>
            <p>Start: {new Date(trip.startDate).toLocaleDateString()}</p>
            <p>End: {new Date(trip.endDate).toLocaleDateString()}</p>
            <p className="font-bold">Price: ₹{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
