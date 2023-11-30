import express, { Request, Response } from "express";
import tasksRouter from "./routes/tasks.router";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/tasks", tasksRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
