import express from "express";
import db from "./config/Databases";

const app = express();

try {
  await db.authenticate();
  console.log("database connectd...");
} catch (error) {
  console.log(error);
}

app.listen(5000, () => console.log("server running in port 5000"));
