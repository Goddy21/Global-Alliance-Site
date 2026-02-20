const applicationService = require("../services/application.service");
const emailService = require("../services/email.service");

/**
 * POST /api/applications
 * Save the application to the DB and fire off notification emails.
 */
async function submitApplication(req, res, next) {
  try {
    const { fullName, email, phone, gender, region, memberType, focusAreas } = req.body;

    // 1. Persist to database
    const application = await applicationService.createApplication({
      fullName,
      email,
      phone,
      gender,
      region,
      memberType,
      focusAreas,
    });

    // 2. Send emails (fire-and-forget — don't block the response)
    emailService
      .sendOrgNotification(application)
      .catch((err) => console.error("Org email failed:", err.message));

    emailService
      .sendApplicantConfirmation(application)
      .catch((err) => console.error("Applicant email failed:", err.message));

    return res.status(201).json({
      message: "Application submitted successfully.",
      id: application.id,
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/applications
 * Return all applications (protect with auth middleware in production).
 */
async function listApplications(req, res, next) {
  try {
    const applications = await applicationService.getAllApplications();
    return res.json({ data: applications, count: applications.length });
  } catch (err) {
    next(err);
  }
}

module.exports = { submitApplication, listApplications };
