"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function PrecisionSection() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold mb-6">
              PRECISION MANUFACTURING
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Advanced CNC Machining Excellence
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our state-of-the-art CNC machining facility delivers precision components 
                with tolerances as tight as ±0.001". We specialize in complex geometries 
                and high-volume production runs.
              </p>
              
              <p>
                From prototype to production, our advanced 5-axis CNC machines handle 
                materials including aluminum, steel, stainless steel, brass, and exotic 
                alloys with exceptional accuracy and surface finish.
              </p>
              
              <p>
                Quality is assured through our ISO 9001:2015 certified processes, 
                in-process inspection, and final quality control using coordinate 
                measuring machines (CMM) and optical comparators.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-black mb-2">±0.001"</div>
                <div className="text-sm text-gray-600">PRECISION TOLERANCE</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <div className="text-sm text-gray-600">PRODUCTION CAPABILITY</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-96 overflow-hidden">
              <Image
                src="/precision-manufacturing-process.jpg"
                alt="Precision CNC Manufacturing"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 shadow-xl">
              <div className="text-2xl font-bold mb-1">ISO 9001:2015</div>
              <div className="text-sm opacity-90">Certified Quality</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}