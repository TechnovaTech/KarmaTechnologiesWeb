"use client"

import { motion } from "framer-motion"
import { Wrench, Cog, Shield, Truck } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Custom Manufacturing",
    description: "Tailored precision manufacturing solutions for your specific requirements and applications."
  },
  {
    icon: Cog,
    title: "Engineering Support",
    description: "Expert engineering consultation and technical support throughout your project lifecycle."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive quality control and testing to ensure products meet industry standards."
  },
  {
    icon: Truck,
    title: "Global Delivery",
    description: "Reliable worldwide shipping and logistics support for timely project completion."
  }
]

export default function AdditionalServices() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 sm:px-6 py-2 border border-primary/30 rounded-full mb-4 sm:mb-6">
            <h2 className="text-primary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] font-light">ADDITIONAL SERVICES</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 font-playfair">
            Complete Solutions
            <span className="block text-primary"></span>
          </h3>
          <div className="w-16 sm:w-24 h-px bg-primary mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 sm:p-8 text-center border border-border hover:border-primary transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}