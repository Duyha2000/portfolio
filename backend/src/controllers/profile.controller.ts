import { Request, Response } from "express";
import { ProfileData } from "../types/profile.types";

export const getProfile = (req: Request, res: Response<ProfileData>) => {
  res.json({
    name: "Tran Duc Duy",
    age: 24,
    nationality: "Vietnamese",
    languages: ["English", "Vietnamese"],
    location: "Vietnam",
    service: "Developer",
    title: "ICT Teacher & Frontend Developer",
    socials: {
      facebook: "https://facebook.com/ducktieu",
      github: "https://github.com/Duyha2000",
      linkedin: "https://linkedin.com/in/duy-tran0209",
    },
    avatar: "/images/png/AvatarCV.jpeg",
  });
};
