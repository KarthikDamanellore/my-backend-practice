const mongoose = require("mongoose");
const eventModel = require("../models/eventModel");
const UserModel = require("../models/UserModel");

const createEvent = async (req, res) => {
    const { eventName, userName, image } = req.body;
    console.log("111", res);

    try {
        const user = await UserModel.findOne({ name: userName });
        if (!user) {
            return res.status(400).json({
                type: "error",
                message: "User does not exist. event creation failed",
                tag: "userName",
            });
        }
        const event = await eventModel.create({ eventName, userName, image });
        res.status(200).json(event);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const getAllEvents = async (req, res) => {
    const { userName } = req.params;
    try {
        const events = await eventModel.find({ userName });
        if (!events.length) {
            return res
                .status(404)
                .json({ message: "No events found for this user" });
        }
        res.status(200).json(events);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

module.exports = {
    createEvent,
    getAllEvents,
};
