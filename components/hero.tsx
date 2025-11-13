"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const heroContent = [
  {
    title: "Engineering Excellence,",
    subtitle: "Driving Progress",
    description: "Explore our expertise in extrusion systems, sustainable materials, and global manufacturing innovation.",
    image: "/industrial-welding-background.jpg"
  },
  {
    title: "Precision Manufacturing,",
    subtitle: "Innovative Solutions",
    description: "Advanced automation and cutting-edge technology for superior quality and efficiency in every project.",
    image: "/industrial-machinery-background.jpg"
  },
  {
    title: "Sustainable Future,",
    subtitle: "Smart Technology",
    description: "Leading the industry with eco-friendly processes and intelligent manufacturing systems.",
    image: "/industrial-factory-building.jpg"
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  }



  const currentContent = heroContent[currentIndex]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={currentContent.image}
            alt="Industrial manufacturing"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Static Geometric Shapes */}
      <div className="absolute inset-0 z-1 pointer-events-none">
         {/* White Circle - Overlapping */}
        <div className="absolute top-1/5 left-82 md:left-90 w-100 h-100 md:w-106 md:h-106 lg:w-[650px] lg:h-[650px] rounded-full bg-white/50" />
        {/* Large Black Circle */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 w-100 h-100 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-black/80" />
        
       
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text inside circles */}
          <div className="relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight text-white">
                  {currentContent.title}
                  <br />
                  <span className="text-white">{currentContent.subtitle}</span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-2xl">
                  {currentContent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
