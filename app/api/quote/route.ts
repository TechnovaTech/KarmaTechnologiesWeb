import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const formDataJson = JSON.parse(formData.get('formData') as string)
    const quoteItems = JSON.parse(formData.get('quoteItems') as string)
    
    // Get uploaded files
    const attachments = []
    let fileIndex = 0
    while (formData.get(`file_${fileIndex}`)) {
      const file = formData.get(`file_${fileIndex}`) as File
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({
        filename: file.name,
        content: buffer
      })
      fileIndex++
    }
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info.karmamechtech@gmail.com',
        pass: 'xmst bpco vljh wqdb'
      }
    })

    const productsHtml = quoteItems.map((item: any) => `
      <tr><td>${item.title}</td><td>${item.category}</td><td>${item.quantity}</td></tr>
    `).join('')

    await transporter.sendMail({
      from: 'info.karmamechtech@gmail.com',
      to: 'info.karmamechtech@gmail.com',
      subject: `Quote Request from ${formDataJson.name}`,
      attachments: attachments,
      html: `
        <h2>Quote Request</h2>
        <p><strong>Name:</strong> ${formDataJson.name}</p>
        <p><strong>Email:</strong> ${formDataJson.email}</p>
        <p><strong>Phone:</strong> ${formDataJson.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${formDataJson.company || 'N/A'}</p>
        <p><strong>Message:</strong> ${formDataJson.message || 'N/A'}</p>
        ${attachments.length > 0 ? `<p><strong>Files:</strong> ${attachments.map(att => att.filename).join(', ')}</p>` : ''}
        <h3>Products:</h3>
        <table border="1">
          <tr><th>Product</th><th>Category</th><th>Quantity</th></tr>
          ${productsHtml}
        </table>
      `
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email Error:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}