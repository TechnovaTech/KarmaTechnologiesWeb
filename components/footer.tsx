"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Navigation: ["HOME", "PRODUCTS", "ABOUT", "CONTACT"],
  Support: ["FAQ", "Shipping", "Returns", "Documentation"],
  Company: ["About Us", "Careers", "Press", "Partners"],
}

const socialLinks = [
  { name: "Instagram", icon: "instagram" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Facebook", icon: "facebook" },
  { name: "Twitter", icon: "twitter" },
]

export default function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative bg-white text-black">
     
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col h-full">
            <div className="mb-2">
              <Image
                src="/logo.png"
                alt="Karma Technologies Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-black text-sm leading-relaxed mb-4 flex-grow font-medium">
              Precision. Performance. Perfection.
            </p>
            <div className="text-black text-sm space-y-1 hidden md:block min-w-xl max-w-2xl">
              <p>© Copyright KARMA Technologies Mécaniques Inc. All Rights Reserved</p>
              <p>Designed & Developed by <a href="https://www.technovatechnologies.com/" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">Technova Technologies</a></p>
            </div>

          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-widest text-black mb-4 uppercase">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black text-sm hover:text-gray-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black text-sm hover:text-gray-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-black text-sm hover:text-gray-500 transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black text-sm hover:text-gray-500 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-black text-sm hover:text-gray-500 transition-colors duration-300">
                  Request Quote
                </Link>
              </li>
            </ul>
          </motion.div>

          

          {/* Get In Touch */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-widest text-black mb-4 uppercase">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-sm text-black font-semibold">Founders:</p>
                <p className="text-sm text-black mb-3">Yash Sutariya: <br/> +1(438)459-7766</p>
                <p className="text-sm text-black">Paras Limbasiya: <br/> +1(438)459-7755</p>
              </div>
              <div>
                <p className="text-sm text-black font-semibold">Address:</p>
                <p className="text-sm text-black">2634 Rue Sabourin, Saint-Laurent, QC, Canada H4S 1M2</p>
              </div>
              <div>
                <p className="text-sm text-black font-semibold">Email:</p>
                <a href="mailto:info.karmamechtech@gmail.com" className="text-sm text-black hover:text-gray-500 transition-colors duration-300">info.karmamechtech@gmail.com</a>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <a href="https://wa.me/14384597755" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 text-black rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 text-black rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/14384597755" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 text-black rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold tracking-widest text-black mb-4 uppercase">Location</h4>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.8426665!2d-73.7514384!3d45.492665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93dbb2648de05:0x447e134a70ab1238!2sKARMA%20Technologies%20M%C3%A9caniques%20Inc.!5e0!3m2!1sen!2s!4v1733097600000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Copyright Section - Mobile Only */}
        <div className="border-t border-gray-300 pt-4 text-center md:hidden">
          <div className="text-black text-sm space-y-1">
            <p>© Copyright KARMA Technologies Mécaniques Inc. All Rights Reserved</p>
            <p>Designed & Developed by <a href="https://www.technovatechnologies.com/" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">Technova Technologies</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
