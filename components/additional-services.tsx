"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    image: "/s11.png",
    title: "CNC / VMC Machining",
    description: "High-accuracy turning and milling for complex metal and aluminum components. "
  },
  {
    image: "/s1.png",
    title: "Custom Manufacturing",
    description: "Tailored precision manufacturing solutions for your specific requirements and applications."
  },
  {
    image: "/s2.png",
    title: "Engineering Support",
    description: "Expert engineering consultation and technical support throughout your project lifecycle."
  },
  {
    image: "/s3.png",
    title: "Quality Assurance",
    description: "Comprehensive quality control and testing to ensure products meet industry standards."
  },
  {
    image: "/s4.png",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
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
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto mb-4 sm:mb-6 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
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