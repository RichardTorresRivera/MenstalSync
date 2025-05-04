import pgPromise from "pg-promise";
import { DB_URL } from "../config.js";

const pgp = pgPromise({
  error: (error, e) => {
    console.error("Database error:", error);
  },
});

// Trabajar DB en remoto
const dbConfig = {
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
  keepAlive: true,
};

const db = pgp(dbConfig);

export default db;
