const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
});

async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS membership_applications (
        id            SERIAL PRIMARY KEY,
        full_name     VARCHAR(255) NOT NULL,
        email         VARCHAR(255) NOT NULL,
        phone         VARCHAR(50),
        gender        VARCHAR(20),
        region        VARCHAR(100),
        member_type   VARCHAR(100),
        focus_areas   TEXT[],
        submitted_at  TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log("Database table ready");
  } catch (err) {
    console.error("Database initialisation failed:", err.message);
    process.exit(1);
  }
}

module.exports = { pool, initDB };