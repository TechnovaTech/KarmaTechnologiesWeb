"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const reasons = [
  {
    image: "/s5.png",
    title: "Quality Material",
    description: "Premium grade materials ensuring durability and performance"
  },
  {
    image: "/s6.png",
    title: "Accredited",
    description: "Certified quality management systems and industry standards"
  },
  {
    image: "/s7.png",
    title: "Trained Workers",
    description: "Skilled professionals with extensive manufacturing expertise"
  },
  {
    image: "/s8.png",
    title: "Global Reach",
    description: "International presence with worldwide shipping capabilities"
  },
  {
    image: "/s9.png",
    title: "Quick Response",
    description: "Fast turnaround times and responsive customer service"
  },
  {
    image: "/s10.png",
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
            Six Reasons For People For Choosing Us
            <span className="block text-gray-600"></span>
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
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
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