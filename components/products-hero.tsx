"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProductsHero() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/precision-manufacturing-process.jpg"
          alt="Manufacturing products"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-playfair">
            Our Products
          </h1>
        </motion.div>
      </div>
    </section>
  )
}