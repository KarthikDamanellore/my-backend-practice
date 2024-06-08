const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {
        eventName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        image: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
