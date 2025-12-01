"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurAbilities() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Image */}
          <motion.div 
            className="relative h-96 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/other2.jpeg"
              alt="CNC Machining Process"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-semibold mb-6">
              Our Abilities
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Our hands-on knowledge and abilities
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Karma Technologies Team includes people with a degree in mechanical 
                engineering and vast experience in the tooling and precision 
                machining field.
              </p>
              
              <p>
                The Karma Technologies Team supports top-notch quality machinery and 
                auxiliary equipment, and each member has specific, practical 
                expertise and experience in this area.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}