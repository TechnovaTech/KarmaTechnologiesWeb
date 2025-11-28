"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import React from "react"

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    console.log('Submitting form data:', data)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response data:', result)

      if (response.ok) {
        setShowSuccess(true)
        if (formRef.current) formRef.current.reset()
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert('Failed to send email: ' + result.message)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Error sending message: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
    
    setIsSubmitting(false)
  }


  return (
    <section className="py-10 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <p className="text-muted-foreground text-lg mb-4">Have any queries?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-playfair">
            We're here to help.
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

  

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <p className="text-muted-foreground text-lg mb-4">Don't be a stranger!</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-playfair">
                Please drop your<br />
                inquiry here
              </h3>
            </div>
            
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card p-6 border border-border rounded-lg shadow-sm"
            >
              <h4 className="text-xl font-bold text-foreground mb-6">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Address</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      2634 Rue Sabourin, Saint-Laurent,<br />QC, Canada H4S 1M2
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Email</h5>
                    <p className="text-muted-foreground text-sm">
                      info.karmamechtech@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Phone No</h5>
                    <p className="text-muted-foreground text-sm">
                      +1(438)459-7766<br />
                      +1(438)459-7755
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-1">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Business Hours</h5>
                    <p className="text-muted-foreground text-sm">
                      Weekdays - 9AM to 5PM<br />
                      Weekends - Off
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contactForm">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                required
                className="w-full p-4 bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                suppressHydrationWarning
              />
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
                className="w-full p-4 bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                suppressHydrationWarning
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
                className="w-full p-4 bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                suppressHydrationWarning
              />
              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={6}
                required
                className="w-full p-4 bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:bg-accent transition-colors duration-300 disabled:opacity-50"
                suppressHydrationWarning
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-4 right-4 z-50 p-4 bg-green-500 text-white rounded-lg shadow-lg max-w-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">✓</span>
            <span className="font-semibold">Message sent to krimavadodariya07@gmail.com!</span>
          </div>
        </motion.div>
      )}
    </section>
  )
}