const mongoose = require("mongoose");

mongoose.set('strictQuery', true);


// connecting mongoose to its default server and Student Database
mongoose.connect('mongodb+srv://devsherawatmohit:studentapi404@cluster0.uidg5fl.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB")); // Error while connecting to database

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');    // connection successful
});

module.exports = db;