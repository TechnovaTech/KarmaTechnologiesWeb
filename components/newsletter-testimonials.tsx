"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    text: "We are overwhelmed with the finest cnc machines manufactured by rangeprecise. The apt attention of the tech team to detail and comprehension of our product has saved us over and over.",
    name: "Mr. R Venkat",
    location: "Chennai"
  },
  {
    text: "Exceptional quality and precision in every component. Karma Technologies has consistently delivered beyond our expectations with their advanced manufacturing capabilities.",
    name: "Ms. S Sharma", 
    location: "Mumbai"
  },
  {
    text: "Outstanding service and technical expertise. Their team's dedication to quality and timely delivery makes them our preferred manufacturing partner.",
    name: "Mr. A Patel",
    location: "Ahmedabad"
  }
]

export default function NewsletterTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", { name, email })
    setName("")
    setEmail("")
  }

  return (
    <div>
      {/* Newsletter Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-110"
            style={{
              backgroundImage: "url('/hero2.jpg')"
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold mb-6">
              Newsletter
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Subscribe to get the latest
              <br />
              news and updates.
            </h2>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-white bg-white text-black placeholder-gray-500 focus:border-black focus:outline-none hover:border-gray-300 transition-colors"
                required
                suppressHydrationWarning
              />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-white bg-white text-black placeholder-gray-500 focus:border-black focus:outline-none hover:border-gray-300 transition-colors"
                required
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-300"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-gray-300 text-sm">
              By submitting this form, you agree to the{" "}
              <span className="text-white">privacy policy</span> and{" "}
              <span className="text-white">terms of use</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold mb-6">
                Testimonials
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                What our customers say
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We do our best to cater the client's need. Here you can 
                check their golden words for us:
              </p>
            </motion.div>

            {/* Right Side - Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 shadow-lg"
            >
              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div>
                  <h4 className="font-bold text-black">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              
              {/* Testimonial Navigation Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-black' : 'bg-gray-300'
                    }`}
                    suppressHydrationWarning
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}