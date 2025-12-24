"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "lucide-react"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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
            {t('nav.home')}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a
            href="/products"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            {t('nav.products')}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a
            href="/about"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            {t('nav.about')}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
          <motion.a
            href="/contact"
            className="text-sm tracking-widest hover:text-primary transition-colors duration-300 relative group text-black"
            whileHover={{ y: -2 }}
          >
            {t('nav.contact')}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
          </motion.a>
        </div>

        {/* Right Side - Quote Button and Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/quote"
            className="px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold tracking-wider transition-colors duration-300 rounded-sm bg-primary text-white hover:bg-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            suppressHydrationWarning
          >
            {t('nav.quote')}
          </motion.a>
          
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <Image 
                src={language === 'en' ? '/us-flag.svg' : '/fr-flag.svg'} 
                alt={language === 'en' ? 'US Flag' : 'France Flag'}
                width={20} 
                height={15} 
                className="rounded-full"
              />
              <span className="text-sm font-medium text-black">{language.toUpperCase()}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            
            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
                <button
                  onClick={() => {
                    setLanguage('en')
                    setLangDropdownOpen(false)
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg"
                >
                  <Image src="/us-flag.svg" alt="US Flag" width={18} height={12} className="rounded-full" />
                  <span className="text-sm text-black">EN</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('fr')
                    setLangDropdownOpen(false)
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 last:rounded-b-lg"
                >
                  <Image src="/fr-flag.svg" alt="France Flag" width={18} height={12} className="rounded-full" />
                  <span className="text-sm text-black">FR</span>
                </button>
              </div>
            )}
          </div>
        </div>

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
                {t('nav.home')}
              </motion.a>
              <motion.a
                href="/products"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {t('nav.products')}
              </motion.a>
              <motion.a
                href="/about"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {t('nav.about')}
              </motion.a>
              <motion.a
                href="/contact"
                className="text-sm tracking-widest hover:text-primary transition-colors text-black"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {t('nav.contact')}
              </motion.a>
              
              <motion.a
                href="/quote"
                className="mt-4 px-6 py-2 bg-primary text-white font-semibold tracking-wider hover:bg-accent transition-colors duration-300 rounded-sm"
                onClick={() => setIsOpen(false)}
                suppressHydrationWarning
              >
                {t('nav.quote')}
              </motion.a>
              
              {/* Mobile Language Switcher */}
              <div className="relative mt-4">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg"
                >
                  <Image 
                    src={language === 'en' ? '/us-flag.svg' : '/fr-flag.svg'} 
                    alt={language === 'en' ? 'US Flag' : 'France Flag'}
                    width={18} 
                    height={12} 
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium text-black">{language.toUpperCase()}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                
                {langDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setLangDropdownOpen(false)
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg"
                    >
                      <Image src="/us-flag.svg" alt="US Flag" width={16} height={10} className="rounded-full" />
                      <span className="text-sm text-black">EN</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('fr')
                        setLangDropdownOpen(false)
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 last:rounded-b-lg"
                    >
                      <Image src="/fr-flag.svg" alt="France Flag" width={16} height={10} className="rounded-full" />
                      <span className="text-sm text-black">FR</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
