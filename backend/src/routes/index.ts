import { Router } from "express";
import activitiesRoutes from "./activities.route";
import contactRoute from "./contact.route";
import profileRoutes from "./profile.route";
import resumeRoutes from "./resume.route";
import skillsTechRoutes from "./skills-tech.route";
import skillsRoutes from "./skills.route";

const router = Router();

router.use("/profile", profileRoutes);
router.use("/skills", skillsRoutes);
router.use("/activities", activitiesRoutes);
router.use("/send-email", contactRoute);
router.use("/resume", resumeRoutes);
router.use("/skills-tech", skillsTechRoutes);
router.use("/activities", activitiesRoutes);

export default router;
