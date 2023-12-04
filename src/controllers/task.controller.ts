import { IRouterParams } from "../types/tasks/types";
import {
  createTask,
  getAllTasks,
  getTaskById,
  removeTask,
  updateTask,
} from "../service/task.service";
export function create(data: IRouterParams) {
  const { req, res } = data;
  //Validation..
  try {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
    };
    return res.json(createTask(newTask));
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export function getAll(data: IRouterParams) {
  const { res } = data;
  return res.json(getAllTasks());
}

export function getById(data: IRouterParams) {
  const { req, res } = data;
  const taskId = parseInt(req.params.id);
  try {
    const result = getTaskById({ id: taskId });
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export function update(data: IRouterParams) {
  const { req, res } = data;
  const updateData = req.body;
  const id = parseInt(req.params.id);
  try {
    const result = updateTask(id, updateData);
    return res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
export function remove(data: IRouterParams) {
  const { req, res } = data;
  const taskId = parseInt(req.params.id);
  try {
    const isDeleted = removeTask({ id: taskId });

    if (isDeleted) {
      return res.json({ result: "Succesfully removed..." });
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
