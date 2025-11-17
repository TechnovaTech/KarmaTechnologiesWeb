// Simple email sender using Gmail SMTP
const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'  // Generate from Google Account settings
  }
});

// Function to send email
async function sendEmail(name, email, subject, message) {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'krimavadodariya07@gmail.com',
    subject: `Contact Form: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to krimavadodariya07@gmail.com');
  } catch (error) {
    console.error('❌ Email failed:', error);
  }
}

module.exports = { sendEmail };