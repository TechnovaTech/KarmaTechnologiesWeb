"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function BusinessRelationships() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/industrial-component-detail.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold mb-6">
            More Info
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            We Believe In Building Long Lasting
            <br />
            Our Business Relationships.
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl">
            Karma Technologies has forged alliances with some businesses whose goods 
            complement our knowledge of service and support. We only work with and 
            represent manufacturers who provide the best products for customers. We take 
            great pride in representing these businesses, and we look forward to providing 
            our present and potential clients with industry-leading response times, product 
            expertise, delivery, and support for these premium brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Read More
              <span className="ml-2">→</span>
            </Link>
            
            <Link 
              href="/quote"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get a quote
              <span className="ml-2">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}