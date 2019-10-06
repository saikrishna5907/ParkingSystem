import mongoose from 'mongoose';

const parkingSpotSchema = new mongoose.Schema({
    // same parking Area model name 
    parkingSpotAreaName: String,
    sensorId: String,
    allowedParkingTimeInMins: Number,
    isSpotVacant: Boolean,
    location: Array
});
mongoose.model("ParkingSpot", parkingSpotSchema);

//helper methods 
 