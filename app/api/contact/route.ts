import nodemailer from 'nodemailer'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'krimavadodariya07@gmail.com',
      subject: `Web Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #D7263D;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Email sent to krimavadodariya07@gmail.com!')
    
    return Response.json({ success: true })
  } catch (error) {
    console.error('Email Error:', error)
    return Response.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' })
  }
}