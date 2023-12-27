// importing
const express = require("express");


// initializing express
const app = express();

// Middleware
app.use((req,res,next) => {
    res.send("Hello world");
    next();
})
