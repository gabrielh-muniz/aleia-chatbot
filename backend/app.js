import express from "express";
import { config } from "dotenv";
import { query } from "./src/database/connection.database.js";
import { catchError } from "./src/lib/errorHandler.lib.js";

config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  const [error, result] = await catchError(query("SELECT NOW()"));
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Success", data: result.rows[0] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
