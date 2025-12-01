"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroContent = [
  {
    title: "Engineering Excellence",
    subtitle: "Driving Progress",
    description: "Explore our expertise in extrusion systems, sustainable materials, and global manufacturing innovation.",
    image: "/hero1.jpg"
  },
  {
    title: "Precision Manufacturing",
    subtitle: "Innovative Solutions",
    description: "Advanced automation and cutting-edge technology for superior quality and efficiency in every project.",
    image: "/hero2.jpg"
  },
  {
    title: "Sustainable Future",
    subtitle: "Smart Technology",
    description: "Leading the industry with eco-friendly processes and intelligent manufacturing systems.",
    image: "/hero3.jpg"
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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
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
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
      </div>



      {/* Content */}
      <motion.div
        className="relative z-10  mx-auto px-4 sm:px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 mt-8 sm:gap-10 md:gap-12 items-center">
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
                <div className="ml-8 flex flex-wrap items-center gap-4">
                  {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                    {currentContent.title}
                  </h1> */}
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white whitespace-nowrap">
  {currentContent.title}
</h1>   

                  {currentContent.subtitle && (
                    // <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                    //   {currentContent.subtitle}
                    // </h2>

<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white whitespace-nowrap">
  {currentContent.subtitle}
</h2>

                  )}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                    {currentContent.description}
                  </p>
                  <Link href="/contact" className="w-38 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300 inline-block text-center">
                    Contacts
                  </Link>
                  <button className="w-38 px-6 py-3 bg-orange-500 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300" suppressHydrationWarning>
                    Brochure
                  </button>
                </div>
              </motion.div>  
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
