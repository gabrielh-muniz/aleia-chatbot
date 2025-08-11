import { config } from "dotenv";
import { Pool } from "pg";

config();

const dbConfig = {
  connectionString: process.env.DB_URL,
  max: parseInt(process.env.DB_MAX_CLIENTS || "10"),
  idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT || "30000"),
  connectionTimeoutMillis: parseInt(
    process.env.DB_CONNECTION_TIMEOUT || "5000"
  ),
};

const pool = new Pool(dbConfig);

pool.on("connect", () => {
  console.log("Database connection established");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

/**
 * Executes a query on the database
 * @param {string} text - The SQL query string
 * @param {Array<String>} params - The parameters for the query
 * @returns {Promise} - A promise that resolves to the query result
 */
function query(text, params) {
  return pool.query(text, params);
}

export { query };
