const express = require('express');
const { addTrip, getTrips } = require('../controllers/tripController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); 

const router = express.Router();

router.post('/add', authMiddleware, upload.single('image'), addTrip);
router.get('/all', getTrips);

module.exports = router;
