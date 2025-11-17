"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Trash2, Plus, Minus } from "lucide-react"

type QuoteItem = {
  id: number
  title: string
  category: string
  image: string
  quantity: number
}

export default function QuoteForm() {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  useEffect(() => {
    const savedItems = localStorage.getItem("quoteItems")
    if (savedItems) {
      setQuoteItems(JSON.parse(savedItems))
    }
  }, [])

  const updateQuantity = (id: number, change: number) => {
    setQuoteItems(prev => {
      const updated = prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
      localStorage.setItem("quoteItems", JSON.stringify(updated))
      return updated
    })
  }

  const removeItem = (id: number) => {
    setQuoteItems(prev => {
      const updated = prev.filter(item => item.id !== id)
      localStorage.setItem("quoteItems", JSON.stringify(updated))
      return updated
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData, quoteItems })
      })

      if (response.ok) {
        setShowSuccess(true)
        setQuoteItems([])
        localStorage.removeItem("quoteItems")
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert('Failed to send quote request')
      }
    } catch (error) {
      console.error('Error sending quote:', error)
      alert('Error sending quote request')
    }
    
    setIsSubmitting(false)
  }

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-playfair">
            Get Your Custom Quote
          </h1>
          <div className="w-44 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Quote Items */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Selected Products</h3>
            
            {quoteItems.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                <p className="text-muted-foreground">No products selected</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Go to products page to add items to your quote
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {quoteItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
                    <div className="relative w-16 h-16 bg-background rounded">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 border border-border rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 text-red-500 hover:bg-red-50 rounded flex items-center justify-center transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Contact Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    suppressHydrationWarning
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    suppressHydrationWarning
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Additional Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Please describe your specific requirements, quantities, delivery timeline, etc."
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  suppressHydrationWarning
                />
              </div>
              
              <button
                type="submit"
                disabled={quoteItems.length === 0 || isSubmitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold tracking-wider hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"
              >
                {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
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
            <span className="font-semibold">Quote request sent successfully!</span>
          </div>
        </motion.div>
      )}
    </section>
  )
}