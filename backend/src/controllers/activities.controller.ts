import { Request, Response } from "express";
import { Activity } from "../types/activities.types";

export const getActivities = (req: Request, res: Response<Activity[]>) => {
  res.json([
    "Participating in a research project at the Economics Faculty",
    "...",
  ]);
};
