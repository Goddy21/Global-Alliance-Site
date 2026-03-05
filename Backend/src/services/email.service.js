const resend = require("../config/mailer");
const { orgNotificationTemplate, applicantConfirmationTemplate } = require("../templates/email.templates");

const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev"; // use your domain once verified

/**
 * Notify the organisation about a new application.
 */
async function sendOrgNotification(application) {
  const { error } = await resend.emails.send({
    from: `GAM Website <${FROM_EMAIL}>`,
    to: process.env.ORG_EMAIL,
    subject: `New Membership Application — ${application.full_name} (#${application.id})`,
    html: orgNotificationTemplate(application),
  });

  if (error) throw new Error(error.message);
}

/**
 * Send a confirmation receipt to the applicant.
 */
async function sendApplicantConfirmation(application) {
  const { error } = await resend.emails.send({
    from: `Global Alliance for Mission <${FROM_EMAIL}>`,
    to: application.email,
    subject: "Your GAM Membership Application Has Been Received",
    html: applicantConfirmationTemplate(application),
  });

  if (error) throw new Error(error.message);
}

module.exports = { sendOrgNotification, sendApplicantConfirmation };