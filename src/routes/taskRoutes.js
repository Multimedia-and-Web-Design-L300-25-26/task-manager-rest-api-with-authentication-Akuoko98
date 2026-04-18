import express from "express";
import Task from "../models/Task.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE TASK
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.user._id
    });

    res.status(201).json(task);

  } catch (error) {
    console.error("Create Task Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
// GET USER TASKS
router.get("/", authMiddleware, async (req, res) => {
  try {

    const tasks = await Task.find({ user: req.user._id });

    res.status(200).json(tasks);

  } catch (error) {
    console.error("Get Tasks Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;