import { Router } from "express";
import { getResume } from "../controllers/resume.controller";

const router = Router();

router.get("/", getResume);

export default router;
