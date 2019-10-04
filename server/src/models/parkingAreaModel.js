import mongoose from 'mongoose';
const parkingAreaSchema = new mongoose.Schema({    
    name: String,
    location: Array,
    totalParkingSpots: Number,
    noOfOccupiedSpots: Number,
    noOfAvailableSpots: Number,
    spotIdsForDisables: Array,                                                                                                                                          
});
mongoose.model('ParkingArea',parkingAreaSchema);