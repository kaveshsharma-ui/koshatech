import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      countryCode,
      service,
      message,
      captchaToken, // ✅ Get token from frontend
    } = body;

    // ✅ Validate required fields
    if (!fullName || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Check captcha token exists
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "Captcha token missing" },
        { status: 400 }
      );
    }

    // ✅ Verify CAPTCHA with Google
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, message: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // ✅ Create transporter (Hostinger SMTP configuration)
    // Expected env vars:
    // SMTP_HOST=smtp.hostinger.com
    // SMTP_PORT=465
    // SMTP_SECURE=true
    // SMTP_USER=sales@koshatech.com
    // SMTP_PASSWORD=your_email_password
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER || process.env.ADMIN_EMAIL,
        pass: process.env.SMTP_PASSWORD || process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    // ✅ Get recipient email (use SMTP_USER or ADMIN_EMAIL)
    const recipientEmail = process.env.SMTP_USER || process.env.ADMIN_EMAIL;
    const fromEmail = process.env.SMTP_USER || process.env.ADMIN_EMAIL;

    if (!recipientEmail) {
      return NextResponse.json(
        { success: false, message: "Email configuration missing" },
        { status: 500 }
      );
    }

    // ✅ Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCountryCode = escapeHtml(countryCode);
    const safeService = escapeHtml(service);
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, "<br>") : "";

    // ✅ Send email only if captcha passed
    await transporter.sendMail({
      from: `"Website Contact" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: email, // Allow replying directly to the form submitter
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #555;">Full Name:</strong> <span style="color: #333;">${safeFullName}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #3b82f6; text-decoration: none;">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> <span style="color: #333;">${safeCountryCode} ${safePhone}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Service:</strong> <span style="color: #333;">${safeService}</span></p>
            ${safeMessage ? `<p style="margin: 10px 0;"><strong style="color: #555;">Message:</strong></p><p style="color: #333; background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">${safeMessage}</p>` : ''}
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from your website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Full Name: ${fullName}
Email: ${email}
Phone: ${countryCode} ${phone}
Service: ${service}
${message ? `Message:\n${message}` : ''}
      `.trim(),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}