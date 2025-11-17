"use client"

import { motion } from "framer-motion"

export default function AboutStats() {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      number: "50+",
      label: "Products"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.49.59-1.42 1.37L6.5 16H9v6h2v-6h2v6h2z"/>
        </svg>
      ),
      number: "150+",
      label: "Staff"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      number: "1.5k",
      label: "Happy Clients"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      number: "12",
      label: "Year of experience"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/industrial-welding-background.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors duration-300">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              
              <motion.h3 
                className="text-4xl md:text-5xl font-bold font-playfair mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              
              <p className="text-gray-300 text-lg tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}