const studentModel = require("../models/student-model");

module.exports.getAllStudents = async (req,res) =>{
    const myData = await Product.find() 
    res.status(200).json({msg : "All students are here"});
}

module.exports.getAllStudentsTesting = async (req,res) =>{
    res.status(200).json({msg : "All students are in testing"});
}

