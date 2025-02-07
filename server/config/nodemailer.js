import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    // secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS ,
    },
  });


export default transporter;


// 🎯 Summary
// ✅ The code configures Nodemailer to send emails using Brevo (SendinBlue).
// ✅ Uses port 587 (which supports STARTTLS for encryption).
// ✅ Uses environment variables for security.
// ✅ Can be used with transporter.sendMail() to send emails.