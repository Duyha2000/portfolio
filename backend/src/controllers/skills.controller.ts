import { Request, Response } from "express";
import { SkillGroup } from "../types/skills.types";

export const getSkills = (req: Request, res: Response<SkillGroup[]>) => {
  res.json([
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks/Platforms",
      items: [
        "NextJS",
        "ReactJS",
        "Redux",
        "Redux Toolkit",
        "Bootstrap",
        "Material UI",
        "SCSS",
        "jQuery",
      ],
    },
    {
      title: "Other Skills",
      items: [
        "Github",
        "Vercel",
        "VSCode",
        "Figma",
        "Jira",
        "Trello",
        "Firebase",
        "PSD to HTML",
        "Office Skills",
      ],
    },
  ]);
};
