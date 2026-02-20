const transporter = require("../config/mailer");
const { orgNotificationTemplate, applicantConfirmationTemplate } = require("../templates/email.templates");

/**
 * Notify the organisation about a new application.
 */
async function sendOrgNotification(application) {
  await transporter.sendMail({
    from: `"GAM Website" <${process.env.SMTP_USER}>`,
    to: process.env.ORG_EMAIL,
    subject: `New Membership Application — ${application.full_name} (#${application.id})`,
    html: orgNotificationTemplate(application),
  });
}

/**
 * Send a confirmation receipt to the applicant.
 */
async function sendApplicantConfirmation(application) {
  await transporter.sendMail({
    from: `"Global Alliance for Mission" <${process.env.SMTP_USER}>`,
    to: application.email,
    subject: "Your GAM Membership Application Has Been Received",
    html: applicantConfirmationTemplate(application),
  });
}

module.exports = { sendOrgNotification, sendApplicantConfirmation };
