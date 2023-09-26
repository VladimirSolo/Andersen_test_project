import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app: Express = express();
const PORT = 8000;

app.use(express.json());

app.use(morgan("dev"));

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));

app.get("/api/feature-flags", (req, res) => {
  res.send({ isTelegramShareEnabled: true });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
