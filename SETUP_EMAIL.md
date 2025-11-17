# Email Setup Instructions

## For Client to Setup EmailJS (No Password Required)

1. Go to https://www.emailjs.com/
2. Create free account with krimavadodariya07@gmail.com
3. Add Gmail service (no password needed - uses OAuth)
4. Create email template with these variables:
   - {{to_email}}
   - {{from_name}}
   - {{from_email}}
   - {{subject}}
   - {{message}}
5. Get your Service ID, Template ID, and User ID
6. Update .env.local file with your IDs

## Template Example:
```
Subject: Contact Form: {{subject}}

New message from: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

This way client keeps control of their email without sharing passwords!