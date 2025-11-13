"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm" : "bg-white"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-playfair tracking-wider text-primary"
          whileHover={{ letterSpacing: "0.15em" }}
          transition={{ duration: 0.3 }}
        >
          Karma Technologies Mecniques
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["HOME", "PRODUCTS", "ABOUT", "CONTACT"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest text-foreground hover:text-primary transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="hidden md:block px-6 py-2 bg-primary text-white font-semibold tracking-wider hover:bg-accent transition-colors duration-300 rounded-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          suppressHydrationWarning
        >
          REQUEST A QUOTE
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span
            className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
              {["HOME", "PRODUCTS", "ABOUT", "CONTACT"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-widest hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                className="mt-4 px-6 py-2 bg-primary text-white font-semibold tracking-wider hover:bg-accent transition-colors duration-300 rounded-sm"
                suppressHydrationWarning
              >
                REQUEST A QUOTE
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
