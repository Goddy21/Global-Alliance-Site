// Read from .env
const ORG_EMAIL = process.env.ORG_EMAIL;
const FRONTEND_URL = process.env.FRONTEND_URL;
const ORG_NAME = 'Global Alliance for Mission (GAM)';

function orgNotificationTemplate({ id, full_name, email, phone, gender, region, member_type, focus_areas, submitted_at }) {
  const areas = (focus_areas || []).join(", ") || "None selected";
  const date  = new Date(submitted_at).toUTCString();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Membership Application</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f1;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f1;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f2d1c 0%,#1a4731 60%,#2a6647 100%);border-radius:12px 12px 0 0;padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <!-- Logo / Monogram -->
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:rgba(255,255,255,0.12);border:1.5px solid rgba(255,255,255,0.25);border-radius:8px;padding:8px 14px;display:inline-block;">
                          <span style="font-family:'Georgia',serif;font-size:13px;font-weight:bold;color:#a8d5b5;letter-spacing:3px;text-transform:uppercase;">GAM</span>
                        </td>
                      </tr>
                    </table>
                    <div style="height:16px;"></div>
                    <h1 style="margin:0;font-family:'Georgia',serif;font-size:26px;font-weight:normal;color:#ffffff;letter-spacing:0.3px;line-height:1.3;">
                      New Membership<br/>
                      <span style="font-style:italic;color:#7ec99a;">Application</span>
                    </h1>
                  </td>
                  <td align="right" valign="bottom">
                    <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;padding:10px 16px;text-align:right;">
                      <div style="font-size:10px;color:#7ec99a;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;">Application</div>
                      <div style="font-size:20px;font-weight:bold;color:#ffffff;font-family:'Georgia',serif;">#${String(id).padStart(4,'0')}</div>
                    </div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.12);">
                <span style="font-size:12px;color:#7ec99a;letter-spacing:1.5px;text-transform:uppercase;">Submitted</span>
                <span style="font-size:12px;color:rgba(255,255,255,0.7);margin-left:8px;">${date}</span>
              </div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:0 40px;border-left:1px solid #e0e8e3;border-right:1px solid #e0e8e3;">

              <!-- Divider Label -->
              <div style="padding:28px 0 16px;">
                <span style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#1a4731;font-family:'Georgia',serif;font-weight:bold;">Applicant Details</span>
                <div style="margin-top:8px;height:1.5px;background:linear-gradient(to right,#1a4731,#a8d5b5,transparent);"></div>
              </div>

              <!-- Info Grid -->
              <table width="100%" cellpadding="0" cellspacing="0">
                ${notifRow("👤", "Full Name", full_name)}
                ${notifRow("✉️", "Email", email)}
                ${notifRow("📞", "Phone", phone || "—")}
                ${notifRow("⚧", "Gender", gender || "—")}
                ${notifRow("🌍", "Region", region || "—")}
                ${notifRow("🎖️", "Membership Type", member_type || "—")}
                ${notifRow("🎯", "Areas of Interest", areas)}
              </table>

              <div style="height:32px;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f2d1c;border-radius:0 0 12px 12px;padding:20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:12px;color:#7ec99a;font-family:'Georgia',serif;">${ORG_NAME}</span>
                  </td>
                  <td align="right">
                    <a href="${FRONTEND_URL}" style="font-size:11px;color:rgba(255,255,255,0.4);text-decoration:none;letter-spacing:0.5px;">${(FRONTEND_URL || '').replace(/^https?:\/\//, '')}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}


function applicantConfirmationTemplate({ full_name }) {
  const firstName = full_name.split(' ')[0];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Application Received</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f1;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f1;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Hero Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f2d1c 0%,#1a4731 60%,#2a6647 100%);border-radius:12px 12px 0 0;padding:48px 40px 40px;text-align:center;">

              <!-- Checkmark Badge -->
              <div style="display:inline-block;background:rgba(168,213,181,0.15);border:2px solid rgba(168,213,181,0.4);border-radius:50%;width:64px;height:64px;line-height:64px;text-align:center;margin:0 auto 20px;">
                <span style="font-size:28px;line-height:64px;">✓</span>
              </div>

              <h1 style="margin:0 0 8px;font-family:'Georgia',serif;font-size:28px;font-weight:normal;color:#ffffff;">
                Application <span style="font-style:italic;color:#7ec99a;">Received!</span>
              </h1>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.55);letter-spacing:0.5px;">
                We'll be in touch soon.
              </p>

              <!-- Monogram -->
              <div style="margin-top:24px;">
                <span style="font-size:11px;color:#7ec99a;letter-spacing:3px;text-transform:uppercase;font-family:'Georgia',serif;">Global Alliance for Mission</span>
              </div>
            </td>
          </tr>

          <!-- Decorative stripe -->
          <tr>
            <td style="height:4px;background:linear-gradient(to right,#1a4731,#4caf7d,#a8d5b5,#4caf7d,#1a4731);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:44px 40px 36px;border-left:1px solid #e0e8e3;border-right:1px solid #e0e8e3;">

              <p style="margin:0 0 8px;font-size:13px;color:#7ec99a;letter-spacing:2.5px;text-transform:uppercase;">Dear</p>
              <h2 style="margin:0 0 28px;font-family:'Georgia',serif;font-size:24px;font-weight:normal;color:#0f2d1c;">${full_name}</h2>

              <p style="margin:0 0 20px;font-size:15px;line-height:1.8;color:#374151;">
                Thank you for applying for membership with the
                <strong style="color:#1a4731;">${ORG_NAME}</strong>.
                We're delighted to have received your application and look forward to reviewing it.
              </p>

              <!-- Timeline card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td style="background:#f5faf7;border-left:4px solid #1a4731;border-radius:0 8px 8px 0;padding:20px 24px;">
                    <div style="font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:#1a4731;margin-bottom:6px;">What happens next</div>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">
                      Our team will carefully review your application. You can expect to hear back from us within
                      <strong style="color:#0f2d1c;">5–7 business days</strong>.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0;font-size:14px;line-height:1.8;color:#6b7280;">
                If you have any questions in the meantime, feel free to reach out to us at
                <a href="mailto:${ORG_EMAIL || ''}" style="color:#1a4731;text-decoration:none;font-weight:600;">${ORG_EMAIL || 'our team'}</a>.
              </p>

              <!-- Sign-off -->
              <div style="margin-top:40px;padding-top:24px;border-top:1px solid #e8f0eb;">
                <p style="margin:0 0 4px;font-size:13px;color:#6b7280;">Warm regards,</p>
                <p style="margin:0;font-family:'Georgia',serif;font-size:16px;color:#0f2d1c;font-style:italic;">The ${ORG_NAME} Team</p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f2d1c;border-radius:0 0 12px 12px;padding:20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:12px;color:#7ec99a;font-family:'Georgia',serif;">${ORG_NAME}</span>
                  </td>
                  <td align="right">
                    <a href="${FRONTEND_URL}" style="font-size:11px;color:rgba(255,255,255,0.4);text-decoration:none;letter-spacing:0.5px;">${(FRONTEND_URL || '').replace(/^https?:\/\//, '')}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}


function notifRow(icon, label, value) {
  return `
  <tr>
    <td style="padding:11px 0;border-bottom:1px solid #f0f4f1;vertical-align:top;width:40%;">
      <span style="font-size:13px;color:#9ca3af;letter-spacing:0.3px;">${icon}&nbsp;&nbsp;${label}</span>
    </td>
    <td style="padding:11px 0 11px 16px;border-bottom:1px solid #f0f4f1;vertical-align:top;">
      <span style="font-size:14px;font-weight:600;color:#0f2d1c;">${value}</span>
    </td>
  </tr>`;
}

// Legacy alias kept for compatibility
function row(label, value) {
  return notifRow('', label, value);
}

module.exports = { orgNotificationTemplate, applicantConfirmationTemplate };