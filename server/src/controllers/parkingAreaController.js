import mongoose from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;
const ParkingArea = require('../models/parkingAreaModel');
const ParkingAreas = mongoose.model('ParkingArea');

module.exports.getAllParkingAreas =(req, res, next) =>{
    ParkingAreas.find((err, docs) => {
        if(err) 
            return res.status(404).json({status: false, message: 'Parking Areas not found'});
        else 
            return res.status(200).json(docs);
    })
} 
module.exports.getAreaByAreaName = (req, res, next) => {
    ParkingAreas.find({name: req.params.name}, (err,docs) => {
        if(!err){
            return res.status(200).json(docs);
        }
        else {
            return res.status(404).json({status: false, message: 'Parking Area not found with this area name'});   
        }
    });
}
module.exports.getSingleParkingArea =(req, res, next) =>{
  if(ObjectId.isValid(req.params.id)){
    ParkingAreas.findById(req.params.id, (err,doc) => {
        if(!err)
            return res.status(200).json(doc);
        else 
            return res.status(404).json({status: false, message: 'Parking Area not found'});
    });
}
else
    return res.status(400).send('No Parking Area found with that id :' + req.params.id );
}
module.exports.postParkingArea = (req, res, next)=> {
    let parkingArea = new ParkingAreas();
    parkingArea.name = req.body.name;
    parkingArea.location = req.body.location;
    parkingArea.totalParkingSpots = req.body.totalParkingSpots;
    parkingArea.noOfOccupiedSpots = req.body.noOfOccupiedSpots;
    parkingArea.noOfAvailableSpots = req.body.noOfAvailableSpots;
    parkingArea.spotIdsForDisables = req.body.spotIdsForDisables;
    parkingArea.save((err,docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
                return next(err);
        }
     });
    
} 
module.exports.updateParkingArea = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Area found with that id :' + req.params.id );
    var updatedParkingArea = {
        name : req.body.name,
        location: req.body.location,
        totalParkingSpots : req.body.totalParkingSpots,
        noOfoccupiedSpots : req.body.noOfoccupiedSpots,
        noOfAvailableSpots: req.body.noOfAvailableSpots,
        spotIdForDisables: req.body.spotIdForDisables
    };

    ParkingAreas.findByIdAndUpdate(req.params.id, {$set: updatedParkingArea},{new : true}, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in Parking Area update'});
    });
}
module.exports.deleteParkingArea = (req,res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Area found with that id :' + req.params.id );

    ParkingAreas.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in Parking Area delete'});
    });
}