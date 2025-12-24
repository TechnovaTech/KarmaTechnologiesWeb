"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function WhyChooseUs() {
  const { t } = useLanguage()
  
  const reasons = [
    {
      image: "/s5.png",
      title: t('why.quality'),
      description: t('why.quality.desc')
    },
    {
      image: "/s6.png",
      title: t('why.accredited'),
      description: t('why.accredited.desc')
    },
    {
      image: "/s7.png",
      title: t('why.workers'),
      description: t('why.workers.desc')
    },
    {
      image: "/s8.png",
      title: t('why.global'),
      description: t('why.global.desc')
    },
    {
      image: "/s9.png",
      title: t('why.response'),
      description: t('why.response.desc')
    },
    {
      image: "/s10.png",
      title: t('why.sustainability'),
      description: t('why.sustainability.desc')
    }
  ]
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
       
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         
          <h3 className="text-5xl md:text-6xl font-bold text-black mb-4 font-playfair">
            {t('why.title')}
            <span className="block text-gray-600"></span>
          </h3>
          <div className="w-24 h-px bg-black mx-auto" />
        </motion.div>

        <motion.div
          className="grid grid-cols-6 gap-4 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center p-4 bg-white border border-black/10 hover:border-black transition-all duration-300 rounded-sm hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h4 className="text-sm font-bold text-black mb-2 font-playfair">
                {reason.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {reason.description}
              </p>
              <div className="w-12 h-px bg-black/30 mx-auto mt-6" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}