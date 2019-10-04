import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Student Name is required'
    },
    studentID: {
        type: Number,
        required: 'Student number is required'
    },
    email: {
        type: String,
        required: 'Student email is required',
        unique: true
    },
    carRego:{
        type: String,
        required: 'Student Car Rego is required'
    },
    contactNumber: {
        type: Number,
        required: 'Contact Number is required'
    }
});
mongoose.model('Student', studentSchema);

//methods
studentSchema.path('email').validate((val) => {
    regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(val);
}, 'Invalid e-mail.');