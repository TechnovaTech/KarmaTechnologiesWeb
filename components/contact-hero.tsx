"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-factory-building.jpg"
          alt="Industrial facility"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 font-playfair">
            Contact Us
          </h1>
        </motion.div>
      </div>
    </section>
  )
}