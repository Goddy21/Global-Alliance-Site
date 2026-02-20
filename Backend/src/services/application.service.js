const { pool } = require("../config/db");

/**
 * Insert a new membership application and return the saved record.
 */
async function createApplication({ fullName, email, phone, gender, region, memberType, focusAreas }) {
  const { rows } = await pool.query(
    `INSERT INTO membership_applications
       (full_name, email, phone, gender, region, member_type, focus_areas)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, full_name, email, phone, gender, region, member_type, focus_areas, submitted_at`,
    [
      fullName,
      email,
      phone   || null,
      gender  || null,
      region  || null,
      memberType || null,
      focusAreas || [],
    ]
  );

  return rows[0];
}

/**
 * Return all applications ordered by most recent first.
 */
async function getAllApplications() {
  const { rows } = await pool.query(
    `SELECT * FROM membership_applications ORDER BY submitted_at DESC`
  );
  return rows;
}

module.exports = { createApplication, getAllApplications };
