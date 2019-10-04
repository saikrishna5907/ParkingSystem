import express from 'express';
const router = express.Router();
const parkingSpotController = require('../controllers/parkingSpotController');
router.get('/parkingSpots', parkingSpotController.getAllParkingSpots);
router.get('/parkingSpots/:id', parkingSpotController.getSingleParkingSpot);
router.post('/parkingSpots', parkingSpotController.postParkingSpot);
router.put('/parkingSpots/:id', parkingSpotController.updateParkingSpot);
router.delete('/parkingSpots/:id', parkingSpotController.deleteParkingSpot);

module.exports = router;