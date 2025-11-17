"use client"

import { motion } from "framer-motion"

export default function ExcellenceSection() {
  return (
    <section className="min-h-[600px] flex">
      {/* Left Side - Dark */}
      <div className="flex-1 bg-primary text-primary-foreground p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/industrial-machinery-background.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-lg font-semibold mb-6 tracking-wider"
          >
            Sustainability
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-4xl lg:text-5xl font-bold mb-8 leading-tight font-playfair"
          >
            Excellence Engineered,<br />
            Quality Delivered
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-200 text-lg leading-relaxed mb-8 max-w-lg"
          >
            To be globally recognized as the most customer-focused and results-driven polymer processing equipment supplier. Results for our customers and results for ourselves.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="px-8 py-3 bg-white text-black font-semibold tracking-wider hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            GET IN TOUCH
          </motion.button>
        </div>
      </div>

      {/* Right Side - Light */}
      <div className="flex-1 bg-secondary text-secondary-foreground p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/industrial-machinery-detail.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-6 font-playfair text-black"
          >
            Featured Points
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg leading-relaxed mb-8"
          >
            Committed to eco-friendly practices, our technologies and processes aim to reduce waste and improve energy efficiency, contributing to a sustainable future.
          </motion.p>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-black">Global Reach</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-black">Advanced Technology</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-black">Material Expertise</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20l-5.5-6 5.5-5.5L17.5 16 12 2z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-black">Sustainability</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}