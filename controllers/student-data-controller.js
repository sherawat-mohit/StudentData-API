const studentModel = require("../models/student-model");

module.exports.getAllStudents = async (req,res) =>{
    const studentData = await studentModel.find(req.query);
    res.status(200).json(studentData);
}

module.exports.getAllStudentsTesting = async (req,res) =>{
    const studentData = await studentModel.find(req.query);
    res.status(200).json(studentData);
}


