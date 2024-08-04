const express = require("express");
const translateController  = require("./controller");

const router = express.Router();

//POST
router.post("/translate", translateController);

module.exports = router;