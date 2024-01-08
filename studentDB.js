require("dotenv").config();
const connectDB = require("./config/mongoose");
const Student = require("./models/student-model");

const StudentJSON = require("./students.json")

const start= async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Student.create(StudentJSON);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}

start();