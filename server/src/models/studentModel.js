import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Student First Name is required'
    },
    lastName: {
        type: String,
        required: 'Student Last Name is required'
    },
    studentId: {
        type: Number,
        required: 'Student number is required'
    },
    emailId: {
        type: String,
        required: 'Student email is required',
        unique: true
    },
    carRego:{
        type: String,
        required: 'Student Car Rego is required'
    },
    phone: {
        type: Number,
        required: 'Contact Number is required'
    }
});
mongoose.model('Student', studentSchema);
