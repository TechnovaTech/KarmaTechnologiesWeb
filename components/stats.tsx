"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

const stats = [
  { number: "15+", target: 15, label: "Years In Business", bg: "bg-black text-white" },
  { number: "1.5k", target: 1500, label: "Happy Clients", bg: "bg-gray-100 text-black" },
  { number: "50+", target: 50, label: "Products", bg: "bg-black text-white" },
  { number: "80+", target: 80, label: "Trained Staff", bg: "bg-gray-100 text-black" }
]

const slideImages = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.png",
  "/slide5.png"
]

const services = [
  "Accuracy",
  "Precision Engineering",
  "Quality Control",
  "Custom Solutions"
]

interface CountingNumberProps {
  target: number
  suffix?: string
  duration?: number
}

function CountingNumber({ target, suffix = "", duration = 2000 }: CountingNumberProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * target)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  const formatNumber = (num: number) => {
    if (target >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-4xl font-bold mb-2">
        {formatNumber(count)}{suffix}
      </h3>
    </motion.div>
  )
}

export default function Stats() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

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
    <section className="relative">
      {/* White background for header, black for content */}
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white"></div>
        <div className="h-1/1 bg-black"></div>
      </div>

      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">


          {/* Services Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <div className="text-black md:text-black text-xl sm:text-2xl md:text-3xl font-bold mb-18">
                <h2>{t('stats.title')}</h2>
              </div>

              <p className="bg-black text-white md:bg-transparent md:text-white text-base sm:text-lg md:text-xl leading-relaxed p-4 md:p-0 -mx-6 md:mx-0 md:rounded-none">
                {t('stats.desc')}
              </p>


            </motion.div>

            {/* Right Image Slideshow */}
            <motion.div variants={itemVariants} className="relative h-[500px] overflow-hidden rounded-lg">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slideImages[currentImageIndex]}
                  alt="Manufacturing Equipment"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}