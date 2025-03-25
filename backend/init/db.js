import pg from "pg";
import dotenv from "dotenv";
const { Client } = pg;
dotenv.config({});
const db = new Client({
    user: "postgres", 
    password: "Itsmekv@2305",
    host: "localhost",
    database: "politics",
    port: 5432,
  });
  

try {   
  await db.connect();
  console.log("Connected to PostgreSQL database!");
} catch (error) {
  console.error("Database connection error:", error);
  process.exit(1);
}
db.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(1);
});
export const query = (text, params) => db.query(text, params);

export default db;
