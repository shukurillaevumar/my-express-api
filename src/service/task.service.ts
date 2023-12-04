import { Task } from "../models/tasks";
import { TasksDb } from "../db/task.db";
import {
  TTaskCreateParams,
  TaskGetByIdParams,
  TaskUpdateParams,
} from "../types/tasks/types";

export function createTask(data: TTaskCreateParams): Task {
  const task: Task = {
    id: TasksDb.length + 1,
    title: data.title,
    description: data.description,
    completed: false,
  };

  TasksDb.push(task);
  return task;
}
export function getAllTasks(): Task[] {
  return TasksDb;
}
export function getTaskById(data: TaskGetByIdParams): Task {
  const task = TasksDb.find((t) => t.id === data.id);

  if (!task) {
    throw new Error("Task not found");
  } else {
    return task;
  }
}
export function updateTask(id: number, data: TaskUpdateParams) {
  const task = TasksDb.find((t) => t.id === id);

  if (!task) {
    throw new Error("Task not found");
  } else {
    task.title = data.title || task.title;
    task.description = data.description || task.description;
    task.completed = data.completed || task.completed;

    return task;
  }
}
export function removeTask(data: TaskGetByIdParams) {
  const index = TasksDb.findIndex((t) => t.id === data.id);

  if (index === -1) {
    throw new Error("Task not found");
  } else {
    TasksDb.splice(index, 1);
    return true;
  }
}
