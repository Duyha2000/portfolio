import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import routes from "./routes";

dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "../public/images")));

// API Routes
app.use("/api", routes);

// Optional: Ping check
app.get("/", (_req, res) => {
  res.send("🚀 Server is running!");
});

export default app;
