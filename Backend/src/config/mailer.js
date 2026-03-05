const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  family: 4,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// verify SMTP connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("SMTP connection failed:", error.message);
  } else {
    console.log("SMTP connection established");
  }
});

module.exports = transporter;