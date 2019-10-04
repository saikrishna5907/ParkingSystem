import express from 'express';
const router = express.Router();
const parkingStatusController = require('../controllers/parkingStatusController');
router.get('/parkingStatus', parkingStatusController.getParkingStatusOfAllSpots);
router.get('/parkingStatus/:id', parkingStatusController.getParkingStatusOfASpot);
router.post('/parkingStatus', parkingStatusController.postParkingStatusOfASpot);
router.put('/parkingStatus/:id', parkingStatusController.updateParkingStatusOfASpot);
router.delete('/parkingStatus/:id', parkingStatusController.deleteParkingStatusOfASpot);

module.exports = router;