const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student-data-controller")

// setting routes
router.get("/", studentController.welcome);



// exporting
module.exports = router;