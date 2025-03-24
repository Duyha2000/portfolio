// src/routes/index.ts
import { Router } from "express";
import profileRoutes from "./profile.route";
import skillsRoutes from "./skills.route";
import activitiesRoutes from "./activities.route";

const router = Router();

router.use("/api/profile", profileRoutes);
router.use("/api/skills", skillsRoutes);
router.use("/api/activities", activitiesRoutes);

export default router;
