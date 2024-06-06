const express = require("express");
const router = express.Router();
const { uploadFile } = require("../controllers/fileController");

const {
    createTask,
    getTasks,
    getSingleTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

router.post("/upload", uploadFile);
router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
