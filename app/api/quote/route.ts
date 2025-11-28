import nodemailer from 'nodemailer'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { formData, quoteItems } = await request.json()
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    // Generate products list HTML
    const productsHtml = quoteItems.map((item: any) => `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px; text-align: left;">${item.title}</td>
        <td style="padding: 10px; text-align: center;">${item.category}</td>
        <td style="padding: 10px; text-align: center;">${item.quantity}</td>
      </tr>
    `).join('')

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'krimavadodariya07@gmail.com',
      subject: `Quote Request: ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #D7263D;">New Quote Request</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Customer Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            ${formData.message ? `
              <p><strong>Additional Requirements:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            ` : ''}
          </div>
          
          <h3>Requested Products:</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background: #f0f0f0;">
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Product</th>
                <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Category</th>
                <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${productsHtml}
            </tbody>
          </table>
          
          <p style="color: #666; font-size: 12px;">Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)
    console.log('✅ Quote request sent to krimavadodariya07@gmail.com!')
    
    return Response.json({ success: true })
  } catch (error) {
    console.error('Quote Email Error:', error)
    return Response.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' })
  }
}