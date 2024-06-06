const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {
        eventName: {
            type: String,
            require: true,
        },
        userName: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
