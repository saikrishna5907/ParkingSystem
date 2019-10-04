import mongoose from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;
const StatusOfParkingSpot = require('../models/parkingStatusOfSpotModel');
const ParkingStatusOfSpots= mongoose.model('StatusOfParkingSpot');

module.exports.getParkingStatusOfAllSpots =(req, res, next) =>{
    ParkingStatusOfSpots.find((err, docs) => {
        if(err) 
            return res.status(404).json({status: false, message: 'Parking Status not found'});
        else 
            return res.status(200).json(docs);
    })
} 
module.exports.getParkingStatusOfASpot =(req, res, next) =>{
  if(ObjectId.isValid(req.params.id)){
    ParkingStatusOfSpots.findById(req.params.id, (err,doc) => {
        if(!err)
            return res.status(200).json(doc);
        else 
            return res.status(404).json({status: false, message: 'Parking Status not found'});
    });
}
else
    return res.status(400).send('No Parking Status found with that id :' + req.params.id );
}
module.exports.postParkingStatusOfASpot = (req, res, next)=> {
    let parkingStatusOfASpot = new ParkingStatusOfSpots();
    parkingStatusOfASpot.parkingSpotId = req.body.parkingSpotId, 
    parkingStatusOfASpot.parkingAreaId = req.body.parkingAreaId;
    parkingStatusOfASpot.parkedVehicleRego = req.body.parkedVehicleRego;
    parkingStatusOfASpot.startTimeOfParking = req.body.startTimeOfParking;
    parkingStatusOfASpot.save((err,docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
                return next(err);
        }
     });
    
} 
module.exports.updateParkingStatusOfASpot = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Status found with that id :' + req.params.id );
    var updatedParkingStautsOfASpot = {
        parkingAreaId: req.body.parkingAreaId,
        parkingSpotId: req.body.parkingSpotId,
        parkedVehicleRego : req.body.parkedVehicleRego,
        startTimeOfParking : req.body.startTimeOfParking
    };

    ParkingStatusOfSpots.findByIdAndUpdate(req.params.id, {$set: updatedParkingStautsOfASpot},{new : true}, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in Parking Status update'});
    });
}
module.exports.deleteParkingStatusOfASpot = (req,res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Status found with that id :' + req.params.id );

    ParkingStatusOfSpots.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in Parking Status delete'});
    });
}