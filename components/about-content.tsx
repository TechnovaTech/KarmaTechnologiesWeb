"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function AboutContent() {
  const { t } = useLanguage()
  
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
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black font-playfair">{t('about.goal.title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('about.goal.description')}
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-black font-playfair">{t('about.vision.title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}