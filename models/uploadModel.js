const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    myFile: String,
});

module.exports = mongoose.model("upload", uploadSchema);
