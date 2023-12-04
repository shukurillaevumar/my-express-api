import { Router, Request, Response } from "express";
import { TasksDb } from "../db/task.db";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/task.controller";

const router = Router();

//Create task
router.post("/", (req: Request, res: Response) => create({ req, res }));

//Get all tasks
router.get("/", (req: Request, res: Response) => getAll({ req, res }));

// Get by ID
router.get("/:id", (req: Request, res: Response) => getById({ req, res }));

// Update
router.put("/:id", (req: Request, res: Response) => update({ req, res }));

//Delete
router.delete("/:id", (req: Request, res: Response) => remove({ req, res }));

export default router;
