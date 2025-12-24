"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const heroContent = [
    {
      title: t('hero.title1'),
      subtitle: t('hero.subtitle1'),
      description: t('hero.desc1'),
      image: "/hero1.png"
    },
    {
      title: t('hero.title2'),
      subtitle: t('hero.subtitle2'),
      description: t('hero.desc2'),
      image: "/hero2.jpg"
    }
  ]

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


 
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/brochure.pdf'
    link.download = 'Karma MechTech.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const currentContent = heroContent[currentIndex]

  if (!currentContent) {
    return null
  }

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
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
                    {currentContent.title}
                  </h1>

                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-8 max-w-2xl">
                    {currentContent.description}
                  </p>
                  <Link href="/contact" className="w-38 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300 inline-block text-center">
                    {t('hero.contact')}
                  </Link>
                  <button onClick={handleDownload} className="w-38 px-6 py-3 bg-orange-500 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300" suppressHydrationWarning>
                    {t('hero.brochure')}
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
