import express from 'express';
const router = express.Router();
const parkingAreaController = require('../controllers/parkingAreaController');
router.get('/parkingAreas', parkingAreaController.getAllParkingAreas);
router.get('/parkingAreas/:id', parkingAreaController.getSingleParkingArea);
router.get('/parkingAreasByName/:name', parkingAreaController.getAreaByAreaName);
router.post('/parkingAreas', parkingAreaController.postParkingArea);
router.put('/parkingAreas/:id', parkingAreaController.updateParkingArea);
router.delete('/parkingAreas/:id', parkingAreaController.deleteParkingArea);

module.exports = router;