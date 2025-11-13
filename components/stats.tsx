"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { number: "15+", label: "Years In Business", bg: "bg-black text-white" },
  { number: "1.5k", label: "Happy Clients", bg: "bg-gray-100 text-black" },
  { number: "50+", label: "Products", bg: "bg-black text-white" },
  { number: "80+", label: "Trained Staff", bg: "bg-gray-100 text-black" }
]

const services = [
  "Accuracy",
  "Precision Engineering", 
  "Quality Control",
  "Custom Solutions"
]

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
      {/* Half white, half black background */}
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white"></div>
        <div className="h-2/3 bg-gray-800"></div>
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
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
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
              <h1 className="text-black-500 mb-10 text-sm tracking-widest">Additional Services</h1>
              <h3 className="text-4xl font-bold text-white pt-8 mt-24">We Also Offer</h3>
              <p className="text-gray-300 leading-relaxed mt-3 mb-8">
                We strive to always be at the top of our game, which is why it is vital to 
                have the best technologies available. Here is a full list of our precision 
                engineering technologies. If you can't see the information you need or 
                have a question about the capabilities of our machines, get in touch. We 
                work with trusted partners to ensure that we can always meet everyone's 
                individual needs.
              </p>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div variants={itemVariants} className="relative h-[800px] overflow-hidden">
              <Image
                src="https://theseveneleven.in/wp-content/uploads/2024/12/img1-min.jpg"
                alt="Industrial building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Industrial Machinery Services Section */}
        <motion.div
          className="mt-15 text-center relative px-12 md:px-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-white/20 to-transparent" />
          
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-block px-6 py-2 border border-white/30 rounded-full mb-6">
              <h2 className="text-white text-sm tracking-[0.3em] font-light">OUR SERVICES</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair">
              We Provide Industrial
              <span className="block text-gray-300">Machinery</span>
            </h3>
            <div className="w-24 h-px bg-white mx-auto" />
          </motion.div>
          
          <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={containerVariants}>
            <motion.div 
              variants={itemVariants} 
              className="group relative p-8 border-2 border-white/50 hover:border-white transition-all duration-500 bg-gray-900/80 rounded-lg"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.div 
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-6 font-playfair">Precision Machining</h4>
                <p className="text-gray-300 leading-relaxed">
                  High-precision CNC machining services for complex components with tight tolerances and superior surface finishes.
                </p>
                <div className="w-12 h-px bg-white/50 mx-auto mt-6" />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="group relative p-8 border-2 border-white/50 hover:border-white transition-all duration-500 bg-gray-900/80 rounded-lg"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.div 
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-6 font-playfair">Custom Manufacturing</h4>
                <p className="text-gray-300 leading-relaxed">
                  Tailored manufacturing solutions for specialized industrial components and prototypes with rapid turnaround times.
                </p>
                <div className="w-12 h-px bg-white/50 mx-auto mt-6" />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="group relative p-8 border-2 border-white/50 hover:border-white transition-all duration-500 bg-gray-900/80 rounded-lg"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.div 
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-6 font-playfair">Quality Assurance</h4>
                <p className="text-gray-300 leading-relaxed">
                  Comprehensive quality control and testing services ensuring all products meet international standards and specifications.
                </p>
                <div className="w-12 h-px bg-white/50 mx-auto mt-6" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        </div>
      </section>
  )
}