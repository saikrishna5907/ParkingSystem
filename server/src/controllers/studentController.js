import mongoose from 'mongoose';
// import ObjectId from 'mongoose.Types.ObjectId';
var ObjectId = require('mongoose').Types.ObjectId;

const Student = require('../models/studentModel');

const Students = mongoose.model('Student');
//to get all students information
module.exports.getAllStudents = (req, res, next) => {
    Students.find((err, docs) => {
        if(!docs) 
            return res.status(404).json({status: false, message: 'students not found'});
        else 
            return res.status(200).json(docs);
    })
}
//to get single student information
module.exports.getSingleStudent = (req,res,next) => {
    if(ObjectId.isValid(req.params.id))
    {
        Students.findById(req.params.id, (err,doc) => {
            if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'student not found'});
        });
    }
    else
        return res.status(400).send('No student found with that id :' + req.params.id );
}
// to create a new student record
module.exports.postStudent = (req, res, next) => {
    let student  = new Students();
    student.name = req.body.name;
    student.studentID = req.body.studentID;    
    student.email = req.body.email;
    student.carRego = req.body.carRego;
    student.contactNumber = req.body.contactNumber;
    student.save((err,docs) => {
       if (!err) {
           res.send(docs);
       }
       else {
               return next(err);
       }
    });
}
// to update an existing student record
module.exports.updateStudent = (req, res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No student found with that id :' + req.params.id );
    var updatedStudent = {
        name : req.body.name,
        studentID: req.body.studentID,
        email : req.body.email,
        carRego : req.body.carRego,
        contactNumber: req.body.contactNumber
    };

    Students.findByIdAndUpdate(req.params.id, {$set: updatedStudent},{new : true}, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in student update'});
    });
}
// to delete a student record
module.exports.deleteStudent = (req,res, next) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No student found with that id :' + req.params.id );

    Students.findByIdAndDelete(req.params.id, (err, doc) => {
        if(!err)
                return res.status(200).json(doc);
            else 
                return res.status(404).json({status: false, message: 'Error in student delete'});
    });
}
