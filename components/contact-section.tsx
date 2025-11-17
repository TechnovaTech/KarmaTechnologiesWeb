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
      alert('Error sending message: ' + error.message)
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

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          <div className="bg-card p-8 text-center border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              2634 Rue Sabourin, Saint-Laurent, QC, Canada H4S 1M2
            </p>
          </div>


          <div className="bg-card p-8 text-center border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Email</h3>
            <p className="text-muted-foreground">
              info.karmamechtech <br/>@gmail.com
            </p>
          </div>

          <div className="bg-card p-8 text-center border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Phone No</h3>
            <p className="text-muted-foreground">
              +1(438)459-7766 
              +1(438)459-7755
            </p>
          </div>

          <div className="bg-card p-8 text-center border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
            <p className="text-muted-foreground">
              Weekdays - 9AM to 5PM<br />
              Weekends- Off
            </p>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-lg mb-4">Don't be a stranger!</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-playfair">
              Please drop your<br />
              inquiry here
            </h3>
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