import mongoose from 'mongoose';

const parkingStatusSchema = new mongoose.Schema({
    parkingAreaId: String,
    parkingSpotId: String,
    parkedVehicleRego:String,
    startTimeOfParking: Date
});

mongoose.model('StatusOfParkingSpot', parkingStatusSchema);