import express from "express";

import { sendEmail } from "../controllers/contact.controller";

const router = express.Router();

router.post("/", sendEmail);

export default router;
