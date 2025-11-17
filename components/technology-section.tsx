"use client"

import { motion } from "framer-motion"

export default function TechnologySection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="mb-12">
            <motion.div 
              variants={itemVariants}
              className="w-20 h-1 bg-primary mb-6"
            />
            <motion.p 
              variants={itemVariants}
              className="text-primary text-lg font-semibold mb-6 tracking-wider"
            >
              Technology and Product Categories
            </motion.p>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-playfair leading-tight"
            >
              Available technologies and product categories include:
            </motion.h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="space-y-4 text-muted-foreground"
          >
            {[
              "Multistation Thermoforming Machines",
              "Extrusion Coating and Lamination Lines",
              "Cross Lamination Film Lines",
              "N 95 Mask Making Machines",
              "Laboratory Equipment",
              "Mono and Multilayer Blown Film Lines",
              "Mono and Multilayer Sheet Lines",
              "Thermoforming and Vacuum",
              "Forming Machines",
              "Foam Extrusion Systems (both chemical and physical)",
              "Pipe Plants",
              "Drip Irrigation Systems",
              "Including LDPE, LLDPE, MDPE, HDPE, PP, and EVA, as well as barrier material such as Polyamide, EVOH, and Surlyn."
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start group"
              >
                <span className="text-primary mr-4 mt-1 text-lg group-hover:scale-110 transition-transform duration-200">•</span>
                <span className="text-lg leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}