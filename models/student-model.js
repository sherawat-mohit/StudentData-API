const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        message: `name is required`
    },
    age: {
        type: Number,
        min: 4,
        max: 20,
        required: true,
        message: `age is required`
    },
    standard: {
        type: Number,
        min: 1,
        max: 12,
        required: true,
        message: `standard is required`
    },
    section: {
        type: String,
        maxlength: 1,
        enum: ['A', 'B', 'C', 'D'],
        required: true,
        message: `section is required`
    },
    father_name: {
        type: String,
        message: `father's name is required`
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
