const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create schema

const TaskSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
