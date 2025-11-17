"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            {/* Top image - building */}
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden shadow-lg z-10 mx-auto lg:mx-0">
              <Image
                src="https://theseveneleven.in/wp-content/uploads/2024/11/services-2.jpg"
                alt="Seven Eleven facility"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Bottom overlapping image - machinery */}
            <div className="absolute top-[240px] sm:top-[280px] md:top-[320px] lg:top-[360px] xl:top-[420px] left-[120px] sm:left-[140px] md:left-[160px] lg:left-[180px] xl:left-[200px] w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[320px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] overflow-hidden shadow-2xl z-20">
              <Image
                src="https://theseveneleven.in/wp-content/uploads/2024/12/abt-image01.jpg"
                alt="Manufacturing machinery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <motion.div variants={itemVariants}>
              <h2 className="text-primary mb-2 text-sm tracking-widest">ABOUT COMPANY</h2>
              <h3 className="text-foreground mb-4 sm:mb-6 font-playfair font-bold text-2xl sm:text-3xl md:text-4xl">Who We Are</h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
              We are Seven Eleven, a company that has come a long way since we began in 2012. Over the years, we have
              grown into a global player with a strong presence in India and partnerships around the world.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
              Known internationally, we are valued for our commitment to quality, affordability, and advanced extrusion
              technology. With a wealth of experience and expertise, we continue to uphold a tradition of excellence.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-3 pt-4">
              {["Certified Company", "Global Reach", "Precision Engineering", "Expert Team"].map((item) => (
                <motion.li key={item} variants={itemVariants} className="flex items-center gap-3 text-black">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              variants={itemVariants}
              className="mt-8 px-8 py-3 bg-primary text-white font-semibold tracking-wider hover:bg-accent transition-colors duration-300 inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              suppressHydrationWarning={true}
            >
              READ MORE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
