// importing
const express = require("express");


// setting port
const PORT = process.env.PORT || 3000;

// initializing express
const app = express();

// Middleware
app.use((req,res,next) => {
    console.log("Hello from Middleware");
    next();
})


// routes
app.get('/', (req,res) => {
    res.send("Welcome to the Student Data API");
})

app.get('/all-students', (req,res) => {
    res.send("Data of all the students will be displayed here");
})




// listening to the port
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})