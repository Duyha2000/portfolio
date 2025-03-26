import { Request, Response } from "express";

export const getTechnicalSkills = (_req: Request, res: Response) => {
  res.json([
    {
      icon: "design",
      title: "Programming Languages",
      paragraph: "Java, Python, JavaScript (ReactJS), C++, C, C#",
    },
    {
      icon: "intelligence",
      title: "Tools & Frameworks",
      paragraph:
        "HTML, CSS, Git, GitHub, VSCode, Bootstrap, Material UI, TailwindCSS",
    },
    {
      icon: "game-dev",
      title: "Office & Teaching Skills",
      paragraph:
        "Microsoft Word, Excel, PowerPoint, IC3, Curriculum Design, Online/Offline Instruction",
    },
  ]);
};
