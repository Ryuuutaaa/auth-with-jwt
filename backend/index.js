import express from "express";
import db from "./config/database.mjs";
import router from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("database connectd...");
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("server running in port 5000"));
