import express from "express";
import cors from "cors";
import "dotenv/config";
import { Resend } from "resend";

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.RESEND_API_KEY) {
  throw new Error("❌ RESEND_API_KEY is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  const { name, email, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const emailSubject = subject?.trim() || `New message from ${name}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; background:#f8fafc; padding:24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:24px;">
          <tr>
            <td style="padding-bottom:16px; border-bottom:1px solid #e2e8f0;">
              <h2 style="margin:0; font-size:20px; color:#0f172a;">New Contact Message</h2>
              <p style="margin:6px 0 0; color:#475569;">Let's Think in ML website</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 0;">
              <p style="margin:0; font-size:15px; color:#0f172a;"><strong>Name:</strong> ${name}</p>
              <p style="margin:6px 0 0; font-size:15px; color:#0f172a;"><strong>Email:</strong> ${email}</p>
              <p style="margin:6px 0 0; font-size:15px; color:#0f172a;"><strong>Subject:</strong> ${emailSubject}</p>
            </td>
          </tr>
          <tr>
            <td style="padding-top:12px; border-top:1px solid #e2e8f0;">
              <p style="margin:0 0 8px; font-size:15px; color:#0f172a;"><strong>Message</strong></p>
              <div style="padding:12px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; white-space:pre-wrap; font-size:15px; color:#0f172a;">${message}</div>
            </td>
          </tr>
        </table>
      </div>
    `;

    const textBody = `New Contact Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${emailSubject}\n\nMessage:\n${message}`;

    const result = await resend.emails.send({
      from: "Feedback Form <onboarding@resend.dev>", // MUST be verified
      to: ["tharunkumarvmt@gmail.com"],
      subject: emailSubject,
      reply_to: email,
      text: textBody,
      html: htmlBody
    });

    console.log("RESEND RESULT:", result);
    res.json({ success: true });
  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
