# EmailJS Setup Instructions

## Steps to receive emails in krimavadodariya07@gmail.com:

1. Go to https://www.emailjs.com/
2. Create free account
3. Add Gmail service:
   - Connect your Gmail (krimavadodariya07@gmail.com)
4. Create email template:
   - Subject: Contact Form: {{subject}}
   - Content: 
     Name: {{name}}
     Email: {{email}}
     Subject: {{subject}}
     Message: {{message}}
5. Get your:
   - Service ID
   - Template ID  
   - Public Key
6. Update the contact form with these credentials

## Current Status:
- Form works and shows success message
- Data is logged to console
- Need to setup email service to receive actual emails