import mongoose from 'mongoose';
var moment = require('moment');
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
module.exports.getParkingStatusByREGO =(req, res, next) =>{
    let lowerCaseRegoValue = req.params.rego.toLowerCase();
    ParkingStatusOfSpots.find({'parkedVehicleRego': lowerCaseRegoValue}, (err,doc) => {
        if(!err)
            return res.status(200).json(doc);
        else 
            return res.status(404).json({status: false, message: `Parking Status with registration number: ${req.params.rego} not found`});
    });
}
 
         
module.exports.postParkingStatusOfASpot = (req, res, next)=> {
    const lowerCaseRegoValue = req.body.parkedVehicleRego.toLowerCase();
    // let recordFound;
    // let duplicateRecordDataId= '';
    // ParkingStatusOfSpots.find({'parkedVehicleRego': lowerCaseRegoValue}, (err,doc) => {
    //     //record found true
    //     if(!err && doc != null){
    //         recordFound = true;
    //         console.log('45record found'+recordFound);
    //         // console.log('docssssss'+ )
    //         if(doc!= null){
    //             console.log(doc)
    //         // duplicateRecordDataId = doc[0]._id
    //         }
    //     }
    // });
    //to confirm that there is no record in parking status collection with same rego number 
    // if(recordFound === false){
    //     console.log('falseee')
    var date = moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    let parkingStatusOfASpot = new ParkingStatusOfSpots();
    parkingStatusOfASpot.parkingSpotId = req.body.parkingSpotId, 
    parkingStatusOfASpot.parkingAreaId = req.body.parkingAreaId;
    parkingStatusOfASpot.parkedVehicleRego = lowerCaseRegoValue;
    parkingStatusOfASpot.startTimeOfParking = date;
    parkingStatusOfASpot.save((err,docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
                return next(err);
        }
     });
    // }
    //if duplicate record found with same rego number then update the old record
    // else if(recordFound === true){
    //     console.log('trueeeee'+duplicateRecordDataId)
    //     var updatedParkingStautsOfASpot = {
    //         parkingAreaId: req.body.parkingAreaId,
    //         parkingSpotId: req.body.parkingSpotId,
    //         parkedVehicleRego : lowerCaseRegoValue,
    //         startTimeOfParking : req.body.startTimeOfParking
    //     };
    //     ParkingStatusOfSpots.findByIdAndUpdate(duplicateRecordData._id, {$set: updatedParkingStautsOfASpot},{new : true}, (err, doc) => {
    //         if(!err)
    //                 return res.status(200).json(doc);
    //             else 
    //                 return res.status(404).json({status: false, message: 'Error in Parking Status update'});
    //     });
    // }

    
} 
module.exports.updateParkingStatusOfASpot = (req, res, next) => {
    const lowerCaseRegoValue = req.body.parkedVehicleRego.toLowerCase();

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Parking Status found with that id :' + req.params.id );
    var updatedParkingStautsOfASpot = {
        parkingAreaId: req.body.parkingAreaId,
        parkingSpotId: req.body.parkingSpotId,
        parkedVehicleRego : lowerCaseRegoValue,
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