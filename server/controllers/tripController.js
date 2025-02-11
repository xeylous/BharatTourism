const Trip = require('../models/Trip');

exports.addTrip = async (req, res) => {
  try {
    const { title, description, facilities, startDate, endDate, price } = req.body;
    const image = req.file ? req.file.path : '';

    const trip = new Trip({ title, description, facilities, startDate, endDate, price, image });

    await trip.save();
    res.status(201).json({ message: 'Trip added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
