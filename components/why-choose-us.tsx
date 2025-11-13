"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quality Material",
    description: "Premium grade materials ensuring durability and performance"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Accredited",
    description: "Certified quality management systems and industry standards"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Trained Workers",
    description: "Skilled professionals with extensive manufacturing expertise"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Reach",
    description: "International presence with worldwide shipping capabilities"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Quick Response",
    description: "Fast turnaround times and responsive customer service"
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Sustainability Focus",
    description: "Environmentally conscious manufacturing and recycling practices"
  }
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative elements */}
        <div className="absolute top-12 left-1/4 w-px h-32 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute top-12 right-1/4 w-px h-32 bg-gradient-to-b from-black/20 to-transparent" />
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-2 border border-black/30 rounded-full mb-6">
            <h2 className="text-black text-sm tracking-[0.3em] font-light">WHY CHOOSE US</h2>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold text-black mb-4 font-playfair">
            Six Reasons For People
            <span className="block text-gray-600">Choosing Us</span>
          </h3>
          <div className="w-24 h-px bg-black mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center p-8 bg-white border border-black/10 hover:border-black transition-all duration-300 rounded-sm hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                  {reason.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-black mb-4 font-playfair">
                {reason.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
              <div className="w-12 h-px bg-black/30 mx-auto mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}