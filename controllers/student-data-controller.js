const studentModel = require("../models/student-model");

module.exports.welcome = (req,res) =>{
    res.send("Welcome to the Student Data API");
}

