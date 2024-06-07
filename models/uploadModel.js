const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
    myFiles: [String],
});

module.exports = mongoose.model("upload", uploadSchema);
