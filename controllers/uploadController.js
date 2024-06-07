const mongoose = require("mongoose");
const uploadModel = require("../models/uploadModel");

const uploadFiles = async (req, res) => {
    const { myFile } = req.body;
    try {
        const files = await uploadModel.create({ myFile });
        await files.save();
        res.status(200).json({ msg: "image uploaded", data: files });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

module.exports = {
    uploadFiles,
};
