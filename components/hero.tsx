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
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Square Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 z-0"
          initial={{ 
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            scale: 1.1
          }}
          animate={{ 
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1
          }}
          exit={{ 
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            scale: 0.95
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            clipPath: { duration: 0.8 },
            scale: { duration: 1.2 }
          }}
        >
          <Image
            src={currentContent.image}
            alt="Industrial manufacturing"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Static Geometric Shapes */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
         {/* White Circle - Overlapping */}
        <div className="absolute top-1/5 -right-16 sm:-right-8 md:right-4 lg:right-16 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] xl:w-[650px] xl:h-[650px] rounded-full bg-white/50" />
        {/* Large Black Circle */}
        <div className="absolute top-1/2 -left-20 sm:-left-16 md:-left-8 lg:left-4 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] rounded-full bg-black/80" />
        
       
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight text-white">
                  {currentContent.title}
                  <br />
                  <span className="text-white">{currentContent.subtitle}</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed max-w-2xl">
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
