const express = require("express");
const translateController  = require("./controller");

const router = express.Router();

//POST
router.post("/", translateController);

module.exports = router;