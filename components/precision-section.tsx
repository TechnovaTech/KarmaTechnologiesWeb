"use client"

import { motion } from "framer-motion"

export default function PrecisionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/industrial-factory-building.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gray-50/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-primary mb-8 tracking-wider"
          >
            PRECISION MANUFACTURING
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Our vision is to be recognized by all its customers as a world-class business.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}