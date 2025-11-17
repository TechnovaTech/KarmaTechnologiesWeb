"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 w-full py-3 z-50 transition-all duration-500 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6  flex items-center justify-between">
        <motion.a
          href="/"
          className="transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/logo.png" alt="Karma Mech Tech" width={90} height={90} className="sm:w-[150px] sm:h-[100px] md:w-[160px] md:h-[100px] object-contain" />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <motion.a
            href="/"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a
            href="/products"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            PRODUCTS
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a
            href="/about"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a
            href="/contact"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
        </div>

        {/* CTA Button */}
        <motion.a
          href="/quote"
          className="hidden md:block px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold tracking-wider transition-colors duration-300 rounded-sm bg-primary text-white hover:bg-accent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          suppressHydrationWarning
        >
          REQUEST A QUOTE
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          suppressHydrationWarning
        >
          <span
            className={`w-6 h-px transition-all duration-300 bg-black ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`w-6 h-px transition-all duration-300 bg-black ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`w-6 h-px transition-all duration-300 bg-black ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white border-b border-primary/10 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col items-center gap-4 py-6">
              <motion.a
                href="/"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                HOME
              </motion.a>
              <motion.a
                href="/products"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                PRODUCTS
              </motion.a>
              <motion.a
                href="/about"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                ABOUT
              </motion.a>
              <motion.a
                href="/contact"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                CONTACT
              </motion.a>
              <motion.a
                href="/quote"
                className="mt-4 px-6 py-2 bg-primary text-white font-semibold tracking-wider hover:bg-accent transition-colors duration-300 rounded-sm"
                onClick={() => setIsOpen(false)}
                suppressHydrationWarning
              >
                REQUEST A QUOTE
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
