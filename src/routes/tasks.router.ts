import { Router, Request, Response } from "express";
import { Task } from "../models/tasks";

const router = Router();
let tasks: Task[] = [
  {
    id: 12,
    title: "IT",
    description: "hello",
    completed: false,
  },
];

//Create task
router.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

//Get all tasks
router.get("/", (req: Request, res: Response) => {
  res.json(tasks);
});

// Get by ID
router.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    res.json(task);
  }
});

// Update
router.put("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found");
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;

    res.json(task);
  }
});

//Delete
router.delete("/:id", (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Task not found");
  } else {
    tasks.splice(index, 1);
    res.status(204).send("Task succesfully found");
  }
});

export default router;
