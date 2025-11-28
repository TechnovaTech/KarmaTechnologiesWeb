"use client"

import { motion } from "framer-motion"

export default function QuoteHero() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/precision-manufacturing-process.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 font-playfair">
            Request Quotes
          </h1>
          
          
          <div className="w-24 h-px bg-primary mx-auto" />
        </motion.div>
      </div>

      
    </section>
  )
}