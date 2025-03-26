import { Request, Response } from "express";

export const getActivities = (_req: Request, res: Response) => {
  res.json([
    {
      text: "Participated in a university-level scientific research project on Emotional Intelligence and Psychological Well-being.",
    },

    {
      text: "Conducted weekly coding sessions with local high school students to promote early exposure to computer science.",
    },
  ]);
};
