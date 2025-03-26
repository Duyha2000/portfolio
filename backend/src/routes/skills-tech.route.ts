import { Router } from "express";
import { getTechnicalSkills } from "../controllers/skills-tech.controller";

const router = Router();

router.get("/", getTechnicalSkills);

export default router;
