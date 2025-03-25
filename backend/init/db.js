import pg from "pg";
import dotenv from "dotenv";
const { Client } = pg;
dotenv.config({});
const db = new Client({
    user: process.env.PG_USERNAME, 
    password:process.env.PG_PWD,
    host: "localhost",
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
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
