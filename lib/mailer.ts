import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? "465");
const smtpSecure = process.env.SMTP_SECURE !== "false";
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

if (!smtpHost || !smtpUser || !smtpPass) {
  throw new Error("Missing SMTP configuration environment variables.");
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass
  }
});

type InquiryEmailInput = {
  email: string;
  message: string;
  parentContactName: string;
  programInterest: string;
  recipientEmail: string;
  studentAgeGroup: string;
};

export async function sendInquiryEmail({
  email,
  message,
  parentContactName,
  programInterest,
  recipientEmail,
  studentAgeGroup
}: InquiryEmailInput) {
  await transporter.sendMail({
    from: `"AccioTech Website" <${smtpUser}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `New AccioTech inquiry from ${parentContactName}`,
    text: [
      "New AccioTech inquiry",
      "",
      `Parent / Contact Name: ${parentContactName}`,
      `Student Age Group: ${studentAgeGroup}`,
      `Email: ${email}`,
      `Program Interest: ${programInterest}`,
      "",
      "Message:",
      message
    ].join("\n"),
    html: `
      <h2>New AccioTech inquiry</h2>
      <p><strong>Parent / Contact Name:</strong> ${escapeHtml(parentContactName)}</p>
      <p><strong>Student Age Group:</strong> ${escapeHtml(studentAgeGroup)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Program Interest:</strong> ${escapeHtml(programInterest)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
