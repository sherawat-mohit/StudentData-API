const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    standard : Number,
    section : String
})

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;