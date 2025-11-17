"use client"

import { motion } from "framer-motion"

export default function AboutContent() {
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
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <div>
            <motion.p 
              variants={itemVariants}
              className="text-primary text-lg font-semibold mb-6 tracking-wider"
            >
              About Us
            </motion.p>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight font-playfair"
            >
              12 Years Of Undefeated Success
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              We are Karma Technologies Mecaniques, a company that has come a long way since we began in 2012. Over the years, we have grown into a global player with a strong presence in Canada and partnerships around the world.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 text-lg leading-relaxed mb-8"
            >
              Known internationally, we are valued for our commitment to quality, affordability, and advanced precision technology. With a wealth of experience and expertise, we continue to uphold a tradition of excellence. Established with a commitment to innovation and quality, we deliver a diverse range of products, including precision components, manufacturing solutions, and industrial systems.
            </motion.p>
            
            <motion.button 
              variants={itemVariants}
              className="px-8 py-3 bg-primary text-white font-semibold tracking-wider hover:bg-accent transition-colors duration-300 rounded-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              OUR SERVICES
            </motion.button>
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            <motion.div 
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4 font-playfair">Our Purpose</h3>
                <p className="text-gray-700 leading-relaxed">
                  We exist to help you produce products that improve everyday life. Empower industries with advanced materials and precision engineering and foster innovation while ensuring environmental responsibility and sustainability in every product and process.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-4 font-playfair">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a global leader in advanced precision manufacturing technologies, shaping the future of manufacturing with innovative, sustainable, and high-performance solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}