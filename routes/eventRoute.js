const express = require("express");
const router = express.Router();

const { createEvent, getAllEvents } = require("../controllers/eventController");

router.post("/createevent", createEvent);
router.get("/events/:userName", getAllEvents);
module.exports = router;
