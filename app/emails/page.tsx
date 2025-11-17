"use client"

import { useState, useEffect } from 'react'

export default function EmailsPage() {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    fetchEmails()
  }, [])

  const fetchEmails = async () => {
    try {
      const response = await fetch('/api/emails')
      const data = await response.json()
      setEmails(data)
    } catch (error) {
      console.error('Error fetching emails:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">📧 Your Email Inbox</h1>
        
        {emails.length === 0 ? (
          <p className="text-gray-500">No emails yet.</p>
        ) : (
          <div className="space-y-4">
            {emails.map((email: any) => (
              <div key={email.id} className="bg-white p-6 rounded-lg shadow border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{email.subject}</h3>
                    <p className="text-gray-600">From: {email.name} ({email.email})</p>
                  </div>
                  <span className="text-sm text-gray-500">{email.date}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="whitespace-pre-wrap">{email.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}