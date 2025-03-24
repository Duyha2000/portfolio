import express from "express";
import { getActivities } from "../controllers/activities.controller";
const router = express.Router();
router.get("/", getActivities);
export default router;
