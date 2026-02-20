function orgNotificationTemplate({ id, full_name, email, phone, gender, region, member_type, focus_areas, submitted_at }) {
  const areas = (focus_areas || []).join(", ") || "None selected";
  const date  = new Date(submitted_at).toUTCString();
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#222;">
      <div style="background:#1a4731;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;">New Membership Application</h2>
        <p style="color:#a8d5b5;margin:4px 0 0;">Application #${id} · ${date}</p>
      </div>
      <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Full Name", full_name)}
          ${row("Email", email)}
          ${row("Phone", phone || "—")}
          ${row("Gender", gender || "—")}
          ${row("Region", region || "—")}
          ${row("Membership Type", member_type || "—")}
          ${row("Areas of Interest", areas)}
        </table>
      </div>
    </div>`;
}

function applicantConfirmationTemplate({ full_name }) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#222;">
      <div style="background:#1a4731;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;">Application Received!</h2>
      </div>
      <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
        <p>Dear <strong>${full_name}</strong>,</p>
        <p>Thank you for applying for membership with the <strong>Global Alliance for Mission (GAM)</strong>. We have received your application and our team will review it shortly.</p>
        <p>You can expect to hear back from us within <strong>5–7 business days</strong>.</p>
        <p style="margin-top:32px;color:#6b7280;font-size:13px;">Global Alliance for Mission · <a href="https://globalallianceorg.netlify.app" style="color:#1a4731;">globalallianceorg.netlify.app</a></p>
      </div>
    </div>`;
}

function row(label, value) {
  return `<tr>
    <td style="padding:8px 0;color:#6b7280;width:40%;">${label}</td>
    <td style="padding:8px 0;font-weight:600;">${value}</td>
  </tr>`;
}

module.exports = { orgNotificationTemplate, applicantConfirmationTemplate };