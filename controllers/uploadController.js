const mongoose = require("mongoose");
const uploadModel = require("../models/uploadModel");

const uploadFiles = async (req, res) => {
    const { myFiles } = req.body;
    try {
        const files = await uploadModel.create({ myFiles });
        res.status(200).json({ msg: "Images uploaded", data: files.myFiles });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

module.exports = {
    uploadFiles,
};
