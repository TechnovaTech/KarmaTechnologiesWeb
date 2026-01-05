import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.karmamechtech@gmail.com',
        pass: 'xmst bpco vljh wqdb'
      }
    })

    await transporter.sendMail({
      from: 'info.karmamechtech@gmail.com',
      to: 'info.karmamechtech@gmail.com',
      subject: `Contact Form: ${subject} - Karma Mech Tech`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #000; padding-bottom: 20px;">
              <h1 style="color: #000; margin: 0; font-size: 28px;">KARMA MECH TECH</h1>
              <h2 style="color: #666; margin: 10px 0 0 0; font-size: 18px; font-weight: normal;">Contact Form Submission</h2>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #000; margin-top: 0; font-size: 20px; border-bottom: 2px solid #000; padding-bottom: 10px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 25%; font-weight: bold; color: #333;">Name:</td>
                  <td style="padding: 8px 0; color: #666;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 8px 0; color: #666;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
                  <td style="padding: 8px 0; color: #666;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
              <h3 style="color: #000; margin-top: 0; font-size: 18px;">Message:</h3>
              <p style="color: #666; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px; border-top: 3px solid #000;">
              <p style="color: #666; margin: 0; font-size: 14px;">📅 Submitted on: ${new Date().toLocaleString()}</p>
              <p style="color: #000; margin: 10px 0 0 0; font-weight: bold;">New contact inquiry received!</p>
            </div>
          </div>
        </div>
      `
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}