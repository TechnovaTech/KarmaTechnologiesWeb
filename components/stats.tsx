"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const stats = [
  { number: "15+", target: 15, label: "Years In Business", bg: "bg-black text-white" },
  { number: "1.5k", target: 1500, label: "Happy Clients", bg: "bg-gray-100 text-black" },
  { number: "50+", target: 50, label: "Products", bg: "bg-black text-white" },
  { number: "80+", target: 80, label: "Trained Staff", bg: "bg-gray-100 text-black" }
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
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-black"></div>
      </div>
      
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${stat.bg} p-8 text-center`}
              >
                <CountingNumber 
                  target={stat.target} 
                  suffix={stat.target >= 1000 ? "" : "+"}
                />
                <p className="text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

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
              <div className="inline-block  py-2  text-black-600 text-2xl  mt-12 mb-6">
                <h2>Additional Service</h2>
              </div>
              <h3 className="text-xl text-black md:text-white mt-12 mb-6">WE ALSO OFFER</h3>
              <p className="text-black md:text-white leading-relaxed mb-8">
                Beyond our core precision manufacturing services, we provide specialized 
                capabilities that set us apart in the industry. Our advanced equipment 
                and skilled technicians deliver exceptional results across diverse 
                manufacturing challenges.
              </p>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-white md:text-white"
                  >
                    <span className="w-2 h-2 bg-white md:bg-white rounded-full" />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div variants={itemVariants} className="relative h-[500px] overflow-hidden">
              <Image
                src="/other.jpg"
                alt="Advanced Manufacturing Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>

        </div>
      </section>
  )
}