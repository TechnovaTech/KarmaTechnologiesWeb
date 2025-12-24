"use client"

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <input
          type="text"
          placeholder={t('contact.form.name')}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder={t('contact.form.email')}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={t('contact.form.subject')}
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          required
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <div>
        <textarea
          placeholder={t('contact.form.message')}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
          rows={4}
          className="w-full p-3 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
      >
        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">{t('contact.form.success')}</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">{t('contact.form.error')}</p>
      )}
    </form>
  )
}