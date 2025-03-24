import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import routes from "./routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.use(routes);

export default app;
