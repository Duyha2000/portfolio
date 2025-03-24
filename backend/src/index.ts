// src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/profile", (_req, res) => {
  res.json({
    name: "Duy Tran",
    title: "ICT Teacher & Frontend Developer",
    socials: {
      facebook: "https://facebook.com/ducktieu",
      github: "https://github.com/Duyha2000",
      linkedin: "https://linkedin.com/in/duy-tran0209",
    },
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
