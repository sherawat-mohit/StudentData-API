// importing
require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const connectDB = require("./config/mongoose")


// setting port
const PORT = process.env.PORT || 3000;

// initializing express
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Hello from Middleware");
    next();
})

// using routes
app.use("/",routes);


// starting the api
const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Connected to the database");
        app.listen(PORT, () => {
            console.log(`Server is up and running on port ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
}

start();
