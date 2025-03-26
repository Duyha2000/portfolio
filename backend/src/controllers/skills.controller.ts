import { Request, Response } from "express";

export const getSkills = (_req: Request, res: Response) => {
  res.json([
    { title: "HTML", width: "85%", text: "85%" },
    { title: "CSS3", width: "90%", text: "90%" },
    { title: "JavaScript", width: "60%", text: "60%" },
    { title: "React JS", width: "80%", text: "80%" },
    { title: "NextJS", width: "75%", text: "75%" },
  ]);
};
