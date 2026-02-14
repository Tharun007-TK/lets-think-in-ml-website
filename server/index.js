import express from "express";
import cors from "cors";
import "dotenv/config";
import { Resend } from "resend";

/*
 * EMAIL CONFIGURATION
 * 
 * Domain Status: VERIFIED ✓
 * Domain: letsthinkinml.me
 * 
 * With a verified domain, emails can be sent to ANY recipient.
 * No restrictions on recipient email addresses.
 * 
 * Sender: noreply@letsthinkinml.me
 */

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
    
    // Email to site owner
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

    // Email to user (auto-reply)
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #fcfaf8; font-family: 'Times New Roman', serif;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 40px 20px 40px; text-align: center; background-color: #1a1a1a;">
                    <h1 style="margin: 0; font-family: 'Times New Roman', serif; color: #fcfaf8; font-size: 24px; letter-spacing: 0.5px;">
                      Let's Think in ML
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="background-color: #1a1a1a; padding-bottom: 40px; text-align: center;">
                     <div style="width: 60px; height: 4px; background-color: #fcfaf8; margin: 0 auto; opacity: 0.8;"></div>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 40px;">
                    <h2 style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; font-size: 22px; font-weight: 600;">
                      Hi ${name},
                    </h2>
                    <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                      Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.
                    </p>
                    
                    <div style="margin: 30px 0; padding: 20px; background-color: #f8fafc; border-left: 4px solid #1a1a1a; border-radius: 4px;">
                      <p style="margin: 0 0 10px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; font-size: 14px; font-weight: 600;">
                        Your message:
                      </p>
                      <p style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                        ${message}
                      </p>
                    </div>

                    <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                      We typically respond within 24-48 hours. In the meantime, feel free to explore our website to learn more about machine learning and AI.
                    </p>

                    <p style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; font-size: 16px; line-height: 1.6; font-weight: 600;">
                      Best regards,<br>
                      Tharun Kumar V<br>
                      <span style="font-weight: 400; font-size: 14px; color: #4a4a4a;">Let's Think in ML</span>
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #fcfaf8; border-top: 1px solid #eaeaea; text-align: center;">
                    <p style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #888888; font-size: 12px; line-height: 1.5;">
                      © ${new Date().getFullYear()} Let's Think in Machine Learning. All rights reserved.
                    </p>
                    <p style="margin: 8px 0 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #888888; font-size: 12px;">
                      This is an automated response. Please do not reply to this email.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const autoReplyText = `Hi ${name},\n\nThank you for reaching out to us. We've received your message and will get back to you as soon as possible.\n\nYour message:\n${message}\n\nWe typically respond within 24-48 hours. In the meantime, feel free to explore our website to learn more about machine learning and AI.\n\nBest regards,\nTharun Kumar V\nLet's Think in ML\n\n---\nThis is an automated response. Please do not reply to this email.`;

    // Send email to site owner
    const ownerEmail = process.env.OWNER_EMAIL || "tharunkumarvmt@gmail.com";
    const result = await resend.emails.send({
      from: "Let's Think in ML <noreply@letsthinkinml.me>",
      to: [ownerEmail],
      subject: emailSubject,
      reply_to: email,
      text: textBody,
      html: htmlBody
    });

    console.log("✅ Email sent to owner:", result);

    // Send auto-reply to user
    try {
      const autoReply = await resend.emails.send({
        from: "Let's Think in ML <noreply@letsthinkinml.me>",
        to: [email],
        subject: `Re: ${emailSubject}`,
        text: autoReplyText,
        html: autoReplyHtml
      });

      console.log("✅ Auto-reply sent to user:", email, autoReply);
      res.json({ success: true, message: "Email sent and auto-reply delivered" });
    } catch (autoReplyError) {
      console.warn("⚠️  Auto-reply failed:", email, autoReplyError.message);
      res.json({ success: true, message: "Email sent but auto-reply failed" });
    }
  } catch (err) {
    console.error("RESEND ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// eBook Download Email Endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const driveId = process.env.VITE_DRIVE_FILE_ID || "1CWODC_9bKV_rGHk6KKkQoUbT8x1FASOR";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${driveId}`;

    const ebookEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Free eBook</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #fcfaf8; font-family: 'Times New Roman', serif;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 20px 40px; text-align: center; background-color: #1a1a1a;">
                  <h1 style="margin: 0; font-family: 'Times New Roman', serif; color: #fcfaf8; font-size: 24px; letter-spacing: 0.5px;">
                    Let's Think in ML
                  </h1>
                </td>
              </tr>

              <tr>
                <td style="background-color: #1a1a1a; padding-bottom: 40px; text-align: center;">
                   <div style="width: 60px; height: 4px; background-color: #fcfaf8; margin: 0 auto; opacity: 0.8;"></div>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px 40px;">
                  <h2 style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; font-size: 22px; font-weight: 600;">
                    Hi ${name || 'there'},
                  </h2>
                  <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    Thank you for downloading <strong>"Let's Think in ML"</strong>.
                  </p>
                  <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    I created this book with one simple goal—to make AI understandable, practical, and approachable. Not overwhelming. Not overly technical. Just clear.
                  </p>
                  
                  <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    As you read, I'd really value your honest feedback.
                  </p>
                  <ul style="margin: 0 0 20px 0; padding-left: 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    <li>Which sections felt clear?</li>
                    <li>Which parts felt confusing?</li>
                    <li>Were the examples practical enough?</li>
                    <li>What should I improve in the next version?</li>
                  </ul>
                  <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    This version is a start to something big, and it will evolve. Your feedback directly shapes that evolution.
                  </p>
                  <p style="margin: 0 0 20px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    If the book helps you see AI as a tool rather than a threat, consider sharing it with someone who's curious but unsure where to begin.
                  </p>
                  <p style="margin: 0 0 30px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4a4a4a; font-size: 16px; line-height: 1.6;">
                    Technology becomes powerful when it becomes accessible.
                  </p>

                  <!-- Button -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td align="center" style="padding: 10px 0 30px 0;">
                        <a href="${downloadLink}" style="display: inline-block; padding: 16px 32px; background-color: #1a1a1a; color: #ffffff; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 600; font-size: 16px; border-radius: 50px; transition: background-color 0.3s ease;">
                          Download eBook &rarr;
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; font-size: 16px; line-height: 1.6; font-weight: 600;">
                    Thank you for being part of this journey.<br>
                    – Tharun Kumar V
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 30px 40px; background-color: #fcfaf8; border-top: 1px solid #eaeaea; text-align: center;">
                  <p style="margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #888888; font-size: 12px; line-height: 1.5;">
                    © ${new Date().getFullYear()} Let's Think in Machine Learning. All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    const ebookEmailText = `Hi ${name || 'there'},\n\nThank you for downloading "Let's Think in ML".\n\nI created this book with one simple goal—to make AI understandable, practical, and approachable. Not overwhelming. Not overly technical. Just clear.\n\nAs you read, I'd really value your honest feedback:\n- Which sections felt clear?\n- Which parts felt confusing?\n- Were the examples practical enough?\n- What should I improve in the next version?\n\nThis version is a start to something big, and it will evolve. Your feedback directly shapes that evolution.\n\nIf the book helps you see AI as a tool rather than a threat, consider sharing it with someone who's curious but unsure where to begin.\n\nTechnology becomes powerful when it becomes accessible.\n\nDownload your eBook: ${downloadLink}\n\nThank you for being part of this journey.\n– Tharun Kumar V`;

    // Send eBook email to user
    const result = await resend.emails.send({
      from: "Let's Think in ML <noreply@letsthinkinml.me>",
      to: [email],
      subject: "Your Free eBook: Let's Think in Machine Learning",
      text: ebookEmailText,
      html: ebookEmailHtml
    });

    console.log("✅ eBook email sent to:", email, result);
    res.json({ success: true, id: result.id });

  } catch (error) {
    console.error("❌ eBook email error:", error);
    res.status(500).json({ error: error.message || "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
