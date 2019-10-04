import mongoose from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;
const ParkingSpot = require('../models/parkingSpotModel');
const ParkingSpots = mongoose.model('ParkingSpot');

module.exports.getAllParkingSpots =(req, res, next) =>{
    ParkingSpots.find((err, docs) => {
        if(err) 
            return res.status(404).json({status: false, message: 'Parking Spots not found'});
        else 
            return res.status(200).json(docs);
    })
} 
module.exports.getSingleParkingSpot =(req, res, next) =>{
  if(ObjectId.isValid(req.params.id)){
    ParkingSpots.findById(req.params.id, (err,doc) => {
        if(!err)
            return res.status(200).json(doc);
        else 
            return res.status(404).json({status: false, message: 'Parking Spot not found'});
    });
}
else
    return res.status(400).send('No Parking Spot found with that id :' + req.params.id );
}
module.exports.postParkingSpot = (req, res, next)=> {
    let parkingSpot = new ParkingSpots();
    parkingSpot.parkingSpotAreaId = req.body.parkingSpotAreaId, 
    parkingSpot.allowedParkingTimeInMins = req.body.allowedParkingTimeInMins;
    parkingSpot.location = req.body.location;
    parkingSpot.sensorId = req.body.sensorId;
    parkingSpot.isSpotVacant = req.body.isSpotVacant;
    parkingSpot.save((err,docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
                return next(err);
        }
     });
    
} 
module.exports.updateParkingSpot = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Spot found with that id :' + req.params.id );
    var updatedParkingSpot = {
        allowedParkingTimeInMins: req.body.allowedParkingTimeInMins,
        location: req.body.location,
        sensorId : req.body.sensorId,
        isSpotVacant : req.body.isSpotVacant
    };

    ParkingSpots.findByIdAndUpdate(req.params.id, {$set: updatedParkingSpot},{new : true}, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in Parking Spot update'});
    });
}
module.exports.deleteParkingSpot = (req,res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Spot found with that id :' + req.params.id );

    ParkingSpots.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in Parking Spot delete'});
    });
}