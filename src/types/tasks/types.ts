import { Request, Response } from "express";

export interface IRouterParams {
  req: Request;
  res: Response;
}

export interface TTaskCreateParams {
  title: string;
  description: string;
  completed?: boolean;
}

export type TaskGetByIdParams = {
  id: number;
};

export interface TaskUpdateParams extends Partial<TTaskCreateParams> {}
