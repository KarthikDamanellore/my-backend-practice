const express = require("express");

const router = express.Router();

const {
    createTask,
    getTasks,
    getSingleTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task.
 *     tags:
 *       - Tasks
 *     description: Create a new task.
 *     requestBody:
 *       description: Task details.
 *       required: true
 *       content:
         application/json:
           schema:
             $ref: '#/components/schemas/Task'  # Reference the Task schema
     responses:
       '200':
         description: Task created successfully.
         content:
           application/json:
             schema:
               $ref: '#/components/schemas/Task'  # Reference the Task schema
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks.
 *     tags:
 *       - Tasks
 *     description: Retrieve a list of all tasks.
 *     responses:
 *       '200':
 *         description: List of tasks retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a single task.
 *     tags:
 *       - Tasks
 *     description: Retrieve a single task by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the task to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Task retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   patch:
 *     summary: Update a task.
 *     tags:
 *       - Tasks
 *     description: Update a task by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the task to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated task details.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       '200':
 *         description: Task updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task.
 *     tags:
 *       - Tasks
 *     description: Delete a task by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the task to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Task deleted successfully.
 */

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
