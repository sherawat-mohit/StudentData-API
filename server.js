// importing
const express = require("express");
const routes = require("./routes/routes");
const db = require("./config/mongoose")


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


// listening to the port
app.listen(PORT, () => {
console.log(`Server is up and running on port ${PORT}`);
});