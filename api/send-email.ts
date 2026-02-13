import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    console.log("Attempting to send email to:", email);
    const apiKey = process.env.RESEND_API_KEY;
    console.log("RESEND_API_KEY present:", !!apiKey);

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const driveId = process.env.VITE_DRIVE_FILE_ID || "1CWODC_9bKV_rGHk6KKkQoUbT8x1FASOR";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${driveId}`;

    // Using direct fetch to bypass potential SDK issues in local environment
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'Let\'s Think in ML <onboarding@resend.dev>',
        to: [email],
        subject: 'Your Free eBook: Let\'s Think in Machine Learning',
        html: `
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

                  <!-- Hero Image (Book Cover Placeholder or decorative) -->
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
                        As you read, I’d really value your honest feedback.
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
                        If the book helps you see AI as a tool rather than a threat, consider sharing it with someone who’s curious but unsure where to begin.
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
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error (Fetch):", data);
      return new Response(JSON.stringify({ error: data }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Internal Server Error in send-email:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
