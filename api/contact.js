import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, company, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ReglobeAI Website" <${process.env.SMTP_USER}>`,
      to: [
        "pavan.kamjula@reglobeai.com",
        "vamshiduddu@reglobeai.com",
        "info@reglobeai.com",
      ],
      replyTo: email,
      subject: `New Inquiry: ${service || "General"} — ${name} (${company})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a1a2e;border-bottom:2px solid #e2e8f0;padding-bottom:12px">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#64748b;width:120px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b"><strong>Company</strong></td><td style="padding:8px 0">${company}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748b"><strong>Service</strong></td><td style="padding:8px 0">${service}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px">
            <strong style="color:#64748b">Message:</strong>
            <p style="margin-top:8px;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
