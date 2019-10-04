import mongoose from 'mongoose';

const parkingSpotSchema = new mongoose.Schema({
    parkingSpotArea: String,
    totalNumberOfSpots: Number,
    numberOfAvailableSpots: Number,
    numberOfOccupiedSpots: Number,
    allowedParkingTimeInMin: Number,
    isSpotVacant: Boolean
});
mongoose.model("ParkingSpot", parkingSpotSchema)