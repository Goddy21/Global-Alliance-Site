const express = require("express");
const cors = require("cors");
const applicationRoutes = require("./routes/application.routes");
const { initDB } = require("./config/db");

const app = express();

// ── Middleware ───────────────────────────────────────────
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

// ── Routes ───────────────────────────────────────────────
app.use("/api/applications", applicationRoutes);

// ── Health check ─────────────────────────────────────────
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// ── 404 handler ──────────────────────────────────────────
app.use((_, res) => res.status(404).json({ error: "Route not found." }));

// ── Global error handler ─────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error." });
});

// Initialise DB on startup
initDB();

module.exports = app;
