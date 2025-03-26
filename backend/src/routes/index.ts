// src/routes/index.ts
import { Router } from "express";
import profileRoutes from "./profile.route";
import skillsRoutes from "./skills.route";
import activitiesRoutes from "./activities.route";
import contactRoute from "./contact.route";

const router = Router();

router.use("/profile", profileRoutes);
router.use("/skills", skillsRoutes);
router.use("/activities", activitiesRoutes);
router.use("/send-email", contactRoute);

export default router;
